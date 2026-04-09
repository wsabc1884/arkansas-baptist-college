import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Arkansas Baptist College')
    .items([
      // ── Site Settings (singleton) ────────────────────────────
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),

      S.divider(),

      // ── Content ──────────────────────────────────────────────
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('All Pages')
                .child(S.documentTypeList('page').title('All Pages')),
              S.divider(),
              S.listItem()
                .title('Create New Page')
                .child(
                  S.document()
                    .schemaType('page')
                    .title('New Page')
                ),
            ])
        ),

      // ── President Page (singleton) ────────────────────────────
      S.listItem()
        .title('President Page')
        .id('presidentPage')
        .child(
          S.document()
            .schemaType('presidentPage')
            .documentId('presidentPage')
            .title('President Page')
        ),

      S.listItem()
        .title('News Articles')
        .schemaType('newsArticle')
        .child(S.documentTypeList('newsArticle').title('News Articles')),

      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),

      S.divider(),

      // ── People ───────────────────────────────────────────────
      S.listItem()
        .title('Staff & Faculty')
        .schemaType('staffMember')
        .child(S.documentTypeList('staffMember').title('Staff & Faculty')),

      S.divider(),

      // ── Documents ────────────────────────────────────────────
      S.listItem()
        .title('Documents & Forms')
        .schemaType('documentForm')
        .child(S.documentTypeList('documentForm').title('Documents & Forms')),
    ])
