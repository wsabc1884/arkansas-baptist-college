import os
import sys

# Check various possible paths
paths_to_check = [
    "/vercel/share/v0-project",
    "/vercel/share/v0-project/app",
    os.getcwd(),
    ".",
    "./app",
]

for p in paths_to_check:
    exists = os.path.exists(p)
    is_dir = os.path.isdir(p) if exists else False
    print(f"Path: {p!r}  exists={exists}  is_dir={is_dir}")
    if is_dir:
        try:
            contents = os.listdir(p)[:10]
            print(f"  contents (first 10): {contents}")
        except Exception as e:
            print(f"  error listing: {e}")

# Try finding tsx files from cwd
cwd = os.getcwd()
print(f"\ncwd: {cwd}")
count = 0
for root, dirs, files in os.walk(cwd):
    dirs[:] = [d for d in dirs if d not in ("node_modules", ".next", ".git")]
    for f in files:
        if f.endswith(".tsx"):
            count += 1
            if count <= 5:
                print(f"  found: {os.path.join(root, f)}")
print(f"Total .tsx files found from cwd: {count}")
