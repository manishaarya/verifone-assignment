export interface ImageSearchResponse {
  total: number;
  total_pages: number,
  results: ImageResponse[];
}

export interface ImageResponse {
  id: string;
  description: string;
  urls: {
    full: string;
    regular: string;
  }
  user: {
    username: string;
    name: string;
    portfolio_url: string;
    profile_image: {
      small: string;
      medium: string;
      large: string
    }
  }
}
