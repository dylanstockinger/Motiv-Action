interface Quote {
  id: number;
  quote: string;
  author?: string;
  author_id: number;
  created_at: string; // date de push par defaut
}
interface FamousQuote {
  author: string | null;
  created_at: string | null;
  id: number | null;
  quote: string | null;
}
