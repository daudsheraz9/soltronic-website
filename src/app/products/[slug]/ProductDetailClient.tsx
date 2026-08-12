"use client";
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useFavourite } from '@/context/FavouriteContext';
import FavouriteButton from '@/components/FavouriteButton';
import ProductSpecificationDisplay from '@/components/ProductSpecificationDisplay';

export default function ProductDetailClient({ initialProduct }: { initialProduct: Product }) {
  const product = initialProduct;
  const { toggleFavourite, isFavourite } = useFavourite();
  const isFav = isFavourite(product.id);

  // Combine main image and any gallery images
  const allImages = useMemo(() => {
    return [product.image, ...(product.gallery || [])].filter((v, i, a) => Boolean(v) && a.indexOf(v) === i);
  }, [product]);

  const [selectedImage, setSelectedImage] = useState(allImages[0] || product.image);
  const [zoomMode, setZoomMode] = useState<'standard' | 'pro'>('standard');
  const [zoomStyle, setZoomStyle] = useState({ backgroundPosition: '50% 50%', backgroundSize: 'contain' });
  const [isZooming, setIsZooming] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync selected image when product prop updates
  React.useEffect(() => {
    if (product && product.image) {
      setSelectedImage(product.image);
    }
  }, [product]);

  const safeUrl = useMemo(() => {
    if (!selectedImage) return '';
    return encodeURI(selectedImage);
  }, [selectedImage]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    // Standard is 150%, Pro is 210% (controlled, crisp zoom)
    const zoomSize = zoomMode === 'standard' ? '150%' : '210%';

    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: zoomSize
    });
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
    setZoomStyle({ backgroundPosition: '50% 50%', backgroundSize: 'contain' });
  };

  const handleMouseEnter = () => {
    setIsZooming(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-4 pb-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Main Image Container */}
            <div 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center h-[320px] sm:h-[380px] lg:h-[420px] relative overflow-hidden cursor-crosshair group"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Zoom Mode Controls */}
              <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-xl p-1 flex items-center gap-1 shadow-sm">
                <span className="text-[10px] font-bold text-gray-500 uppercase px-2 flex items-center gap-1">
                  <i className="fa-solid fa-magnifying-glass-plus text-primary text-[11px]"></i> Zoom:
                </span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setZoomMode('standard'); }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    zoomMode === 'standard' ? 'bg-primary text-white shadow-xs' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setZoomMode('pro'); }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    zoomMode === 'pro' ? 'bg-primary text-white shadow-xs' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Pro
                </button>
              </div>

              {/* Fullscreen Expand Button */}
              <button 
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-md p-2 rounded-xl border border-gray-200/80 text-gray-700 hover:text-primary hover:bg-white shadow-sm transition-all flex items-center gap-1.5 text-xs font-semibold px-3"
              >
                <i className="fa-solid fa-expand text-xs"></i> Fullscreen
              </button>

              {/* Zoomable Image */}
              <div 
                className="w-full h-full bg-no-repeat transition-all duration-150 ease-out"
                style={{
                  backgroundImage: `url("${safeUrl}")`,
                  ...zoomStyle,
                }}
              />
              
              {/* Bottom Right Indicator Badge */}
              <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1.5 pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-xs text-emerald-400"></i>
                <span>{isZooming ? (zoomMode === 'standard' ? '1.5x Zoom' : '2.1x Pro Zoom') : 'Hover to Zoom'}</span>
              </div>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 flex-shrink-0 bg-white overflow-hidden transition-colors ${
                      selectedImage === img ? 'border-primary' : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <Image src={encodeURI(img)} alt={`${product.title} view ${idx + 1}`} width={80} height={80} className="w-full h-full object-contain p-1.5" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Actions */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Main Info Box */}
            <div className="bg-white rounded-2xl p-5 lg:p-6 border border-gray-100 shadow-sm relative">
              
              {/* Top Right Corner Favourite Button */}
              <FavouriteButton product={product} className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 !p-0 flex items-center justify-center !rounded-xl bg-gray-50 border border-gray-200 hover:bg-white shadow-xs z-10" />

              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4 pr-12">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-primary font-semibold tracking-wider text-[11px] uppercase">{product.category}</h2>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {product.status || 'In Stock'}
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{product.title}</h1>
                </div>
                {product.brandImage && (
                  <div className="relative w-16 h-7 flex-shrink-0 mr-2">
                    <Image src={product.brandImage} alt={product.vendor} fill className="object-contain object-right" />
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mb-4 pb-4 border-b border-gray-100">
                <p className="text-xs text-gray-500 mb-0.5 font-medium">Price</p>
                <div className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">{product.price}</div>
                <p className="text-[11px] text-gray-400 mt-1">*Prices are subject to change without prior notice.</p>
              </div>
              
              {/* Short Description */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">
                {product.description.split('.')[0]}. High-efficiency solution designed for maximum yield and reliability in extreme environments.
              </p>

              {/* Actions */}
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/923277770090?text=Hello,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(product.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3.5 px-5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-base"
                >
                  Order Now <i className="fa-solid fa-arrow-right text-sm"></i>
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/contact" className="w-full bg-white hover:bg-gray-50 text-gray-800 font-bold py-2.5 px-3 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-2 text-xs">
                    <i className="fa-regular fa-envelope"></i> Contact Sales
                  </Link>
                  <a 
                    href={`/Products%20Datasheets/${encodeURIComponent(product.title)}.pdf`}
                    download={`${product.title} Datasheet.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-2.5 px-3 rounded-xl border border-gray-200/60 transition-colors flex items-center justify-center gap-2 text-xs"
                  >
                    <i className="fa-regular fa-file-pdf text-red-500"></i> Datasheet
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Product Details Tabs (Specs, Shipping, Warranty) */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="border-b border-gray-100 mb-8">
            <nav className="flex space-x-8" aria-label="Tabs">
              <button className="border-b-2 border-primary py-4 px-1 text-sm font-bold text-primary">
                Technical Details
              </button>
            </nav>
          </div>
          
          <div className="prose max-w-none text-gray-600 mb-12">
            <p className="text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Dynamic Category Specifications */}
          <ProductSpecificationDisplay product={product} />
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Top Bar */}
          <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-lg"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="max-w-4xl max-h-[85vh] w-full h-full relative flex flex-col items-center justify-center">
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <Image 
                src={selectedImage} 
                alt={product.title} 
                fill 
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain" 
                priority
              />
            </div>
            
            {/* Gallery thumbnails in modal */}
            {allImages.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto p-2 max-w-full">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-14 rounded-lg border-2 flex-shrink-0 bg-white overflow-hidden transition-colors ${
                      selectedImage === img ? 'border-emerald-400' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`View ${idx + 1}`} width={56} height={56} className="w-full h-full object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
