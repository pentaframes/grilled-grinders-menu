import { v2 as cloudinary } from 'cloudinary';

export interface GalleryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

export interface GalleryData {
  resources: GalleryImage[];
  isMock: boolean;
}

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;
const folderName = process.env.CLOUDINARY_FOLDER || 'gallery-images';

const isCloudinaryConfigured =
  cloudName &&
  cloudName !== 'YOUR_CLOUDINARY_CLOUD_NAME' &&
  apiKey &&
  apiKey !== 'YOUR_CLOUDINARY_API_KEY' &&
  apiSecret &&
  apiSecret !== 'YOUR_CLOUDINARY_API_SECRET';

if (isCloudinaryConfigured) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });
}

export async function fetchGallery(): Promise<GalleryData> {
  if (!isCloudinaryConfigured) {
    // Return high-quality Unsplash food/drink images as mock/fallback
    const mockImages: GalleryImage[] = [
      {
        public_id: 'demo/burger',
        secure_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 900,
      },
      {
        public_id: 'demo/coffee',
        secure_url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 900,
      },
      {
        public_id: 'demo/sandwich',
        secure_url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 900,
      },
      {
        public_id: 'demo/fries',
        secure_url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 900,
      },
      {
        public_id: 'demo/cake',
        secure_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 900,
      },
      {
        public_id: 'demo/smoothie',
        secure_url: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 900,
      },
    ];
    return { resources: mockImages, isMock: true };
  }

  try {
    const expression = folderName ? `folder:"${folderName}"` : 'resource_type:image';
    const result = await cloudinary.search
      .expression(expression)
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    const resources = result.resources.map((resource: any) => ({
      public_id: resource.public_id,
      secure_url: resource.secure_url,
      width: resource.width,
      height: resource.height,
    }));

    return { resources, isMock: false };
  } catch (error) {
    console.error('Error fetching resources from Cloudinary:', error);
    return { resources: [], isMock: false };
  }
}
