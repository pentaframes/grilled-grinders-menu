import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary only if credentials are set and are not the placeholders
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

export async function GET() {
  if (!isCloudinaryConfigured) {
    console.warn('Cloudinary is not configured yet. Returning demo images.');
    // Return high quality placeholder food/drink images so the gallery looks premium by default
    const mockImages = [
      {
        public_id: 'demo/burger',
        secure_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
        width: 800,
        height: 600,
      },
      {
        public_id: 'demo/coffee',
        secure_url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80',
        width: 800,
        height: 600,
      },
      {
        public_id: 'demo/sandwich',
        secure_url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
        width: 800,
        height: 600,
      },
      {
        public_id: 'demo/fries',
        secure_url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80',
        width: 800,
        height: 600,
      },
      {
        public_id: 'demo/cake',
        secure_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80',
        width: 800,
        height: 600,
      },
      {
        public_id: 'demo/smoothie',
        secure_url: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=800&auto=format&fit=crop&q=80',
        width: 800,
        height: 600,
      },
    ];
    return NextResponse.json({ resources: mockImages, isMock: true });
  }

  try {
    // Search for assets in the specified folder (or general assets if folder is empty)
    // Using search API for flexible ordering and tags support
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

    return NextResponse.json({ resources, isMock: false });
  } catch (error: any) {
    console.error('Error fetching resources from Cloudinary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images from Cloudinary', details: error.message },
      { status: 500 }
    );
  }
}
