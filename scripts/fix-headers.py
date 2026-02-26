import os
import re

ROOT = "/vercel/share/v0-project"
DRY_RUN = False  # set True to preview without writing

def find_tsx_files(directory):
    results = []
    for root, dirs, files in os.walk(directory):
        dirs[:] = [d for d in dirs if d not in ("node_modules", ".next", ".git")]
        for f in files:
            if f.endswith(".tsx"):
                results.append(os.path.join(root, f))
    return results

skip_files = {
    os.path.join(ROOT, "app/layout.tsx"),
    os.path.join(ROOT, "app/studio/layout.tsx"),
}

skip_prefixes = [
    os.path.join(ROOT, "components/header"),
    os.path.join(ROOT, "components/footer"),
    os.path.join(ROOT, "components/ui/"),
]

all_files = find_tsx_files(os.path.join(ROOT, "app")) + find_tsx_files(os.path.join(ROOT, "components"))
print(f"Scanning {len(all_files)} .tsx files...")

fixed = 0

# Match import lines bringing in Header/Footer from any path containing /header or /footer
IMPORT_HEADER_RE = re.compile(
    r'^\s*import\s+(?:\{\s*Header\s*(?:,\s*[^}]*)?\}\s*|Header\s*)from\s*[\'"][^\'"]*(?:/|\\)header(?:/index)?[\'"]\s*;?\s*$',
    re.MULTILINE,
)
IMPORT_FOOTER_RE = re.compile(
    r'^\s*import\s+(?:\{\s*Footer\s*(?:,\s*[^}]*)?\}\s*|Footer\s*)from\s*[\'"][^\'"]*(?:/|\\)footer(?:/index)?[\'"]\s*;?\s*$',
    re.MULTILINE,
)

# Remove self-closing <Header ... /> (including multi-line attrs)
HEADER_SELF_CLOSING_RE = re.compile(r"<Header\b[\s\S]*?\/>", re.MULTILINE)
FOOTER_SELF_CLOSING_RE = re.compile(r"<Footer\b[\s\S]*?\/>", re.MULTILINE)

# Remove non-self-closing blocks <Header ...> ... </Header> (just in case)
HEADER_BLOCK_RE = re.compile(r"<Header\b[\s\S]*?>[\s\S]*?<\/Header\s*>", re.MULTILINE)
FOOTER_BLOCK_RE = re.compile(r"<Footer\b[\s\S]*?>[\s\S]*?<\/Footer\s*>", re.MULTILINE)

for filepath in all_files:
    if filepath in skip_files:
        continue
    if any(filepath.startswith(p) for p in skip_prefixes):
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    if "Header" not in content and "Footer" not in content:
        continue

    original = content

    # Remove imports
    content = IMPORT_HEADER_RE.sub("", content)
    content = IMPORT_FOOTER_RE.sub("", content)

    # Remove JSX usages
    content = HEADER_BLOCK_RE.sub("", content)
    content = FOOTER_BLOCK_RE.sub("", content)

    content = HEADER_SELF_CLOSING_RE.sub("", content)
    content = FOOTER_SELF_CLOSING_RE.sub("", content)

    # Cleanup excessive blank lines
    content = re.sub(r"\n{3,}", "\n\n", content).strip() + "\n"

    if content != original:
        rel = os.path.relpath(filepath, ROOT)
        print(f"  FIXED: {rel}")
        fixed += 1
        if not DRY_RUN:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)

print(f"\nDone! Fixed {fixed} files. DRY_RUN={DRY_RUN}")