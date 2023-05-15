export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      famous_quotes: {
        Row: {
          author: string
          created_at: string | null
          id: number
          quote: string
        }
        Insert: {
          author: string
          created_at?: string | null
          id?: number
          quote: string
        }
        Update: {
          author?: string
          created_at?: string | null
          id?: number
          quote?: string
        }
      }
      quotes: {
        Row: {
          author: string
          author_id: number
          created_at: string | null
          id: number
          quote: string
          updated_at: string | null
        }
        Insert: {
          author: string
          author_id?: number
          created_at?: string | null
          id?: number
          quote?: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          author_id?: number
          created_at?: string | null
          id?: number
          quote?: string
          updated_at?: string | null
        }
      }
      testimonials: {
        Row: {
          created_at: string | null
          id: number
          message: string
          rate: number | null
          title: string
          user_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          message: string
          rate?: number | null
          title: string
          user_id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
          message?: string
          rate?: number | null
          title?: string
          user_id?: number
        }
      }
      user: {
        Row: {
          created_at: string | null
          email: string
          firstName: string
          id: number
          lastName: string
        }
        Insert: {
          created_at?: string | null
          email: string
          firstName: string
          id?: number
          lastName: string
        }
        Update: {
          created_at?: string | null
          email?: string
          firstName?: string
          id?: number
          lastName?: string
        }
      }
      voicenotes: {
        Row: {
          created_at: string | null
          filename: string
          id: number
          url: string
          user_id: number
        }
        Insert: {
          created_at?: string | null
          filename: string
          id?: number
          url: string
          user_id?: number
        }
        Update: {
          created_at?: string | null
          filename?: string
          id?: number
          url?: string
          user_id?: number
        }
      }
    }
    Views: {
      random_famous_quote: {
        Row: {
          author: string | null
          created_at: string | null
          id: number | null
          quote: string | null
        }
      }
      random_quote: {
        Row: {
          author: string | null
          author_id: number | null
          created_at: string | null
          id: number | null
          quote: string | null
          updated_at: string | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
