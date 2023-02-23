import Image from 'next/image';

export default function NextImage({src, alt}) {
  return (
    <Image
      src={`/nextjs/${src}`}
      alt={alt}
      width={100}
      height={24}
      priority
    />
  );
}
