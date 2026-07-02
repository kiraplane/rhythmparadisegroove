export type SourceType =
  | 'official'
  | 'competitor'
  | 'review'
  | 'community'
  | 'youtube'
  | 'serper'
  | 'manual_review';

export type Confidence = 'high' | 'medium' | 'low' | 'watch';

export interface DataSource {
  type: SourceType;
  label: string;
  url: string;
  checkedAt: string;
  confidence: Confidence;
  note?: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideVideo {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnailUrl: string;
  publishedAt?: string;
  viewCountLabel?: string;
  checkedAt: string;
}

export type GuideCategory =
  | 'Beginner'
  | 'Perfect'
  | 'Setup'
  | 'Demo'
  | 'Modes'
  | 'Walkthrough'
  | 'Multiplayer'
  | 'Reference';

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category: GuideCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coverImageUrl: string;
  publishedAt: string;
  updatedAt: string;
  sourceStrategy:
    | 'official'
    | 'manual_data'
    | 'user_intent_youtube'
    | 'popular_youtube'
    | 'youtube_explainer'
    | 'community_crosscheck';
  videoSearchQueries?: string[];
  sourceNotes?: string;
  video?: GuideVideo;
  tags: string[];
  relatedRoutes: string[];
  body: GuideSection[];
  faq: GuideFaq[];
}

export interface TopicPage {
  route: string;
  label: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  image: string;
  updatedAt: string;
  sections: GuideSection[];
  featuredRoutes: string[];
  faq: GuideFaq[];
}
