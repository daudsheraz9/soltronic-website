"use client";
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

export default function ProductDetailClient({ initialProduct }: { initialProduct: Product }) {
  const product = initialProduct;

  // Combine main image and any gallery images
  const allImages = [product.image, ...(product.gallery || [])].filter((v, i, a) => a.indexOf(v) === i);
  const [selectedImage, setSelectedImage] = useState(allImages[0]);
  const [zoomStyle, setZoomStyle] = useState({ backgroundPosition: '50% 50%', backgroundSize: 'contain' });
  const [isZooming, setIsZooming] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '250%'
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
    <div className="bg-[#f8fafc] min-h-screen pt-8 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Main Image with Zoom */}
            <div 
              className="bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center justify-center h-[500px] lg:h-[600px] relative overflow-hidden cursor-crosshair group"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className={`w-full h-full bg-no-repeat transition-all duration-150 ease-out`}
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  ...zoomStyle,
                }}
              />
              
              {!isZooming && (
                <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm p-3 rounded-full text-gray-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass-plus text-xl"></i>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-24 h-24 rounded-xl border-2 flex-shrink-0 bg-white overflow-hidden transition-colors ${
                      selectedImage === img ? 'border-primary' : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <Image src={img} alt={`${product.title} view ${idx + 1}`} width={96} height={96} className="w-full h-full object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Actions */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Main Info Box */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm mb-6">
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-primary font-semibold tracking-wider text-xs mb-2 uppercase">{product.category}</h2>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{product.title}</h1>
                </div>
                {product.brandImage && (
                  <div className="relative w-24 h-10 flex-shrink-0">
                    <Image src={product.brandImage} alt={product.vendor} fill className="object-contain object-right" />
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-gray-100">
                <p className="text-sm text-gray-500 mb-1 font-medium">Price</p>
                <div className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">{product.price}</div>
                <p className="text-xs text-gray-400 mt-2">*Prices are subject to change without prior notice.</p>
              </div>
              
              {/* Short Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description.split('.')[0]}. High-efficiency solution designed for maximum yield and reliability in extreme environments.
              </p>

              {/* Actions */}
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/923277770090?text=Hello,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(product.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-3 text-lg"
                >
                  Order Now <i className="fa-solid fa-arrow-right"></i>
                </a>
                <Link href="/contact" className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-6 rounded-2xl border-2 border-gray-200 transition-colors flex items-center justify-center gap-2">
                  <i className="fa-regular fa-envelope"></i> Contact Sales
                </Link>
              </div>

            </div>

            {/* Sleek Downloads Section */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-download text-primary"></i> Documents
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                <a href="#" className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-primary hover:bg-gray-50 transition-all group">
                  <div className="flex items-center gap-3">
                    <i className="fa-regular fa-file-pdf text-red-500 text-lg"></i>
                    <span className="font-medium text-sm text-gray-700">Datasheet</span>
                  </div>
                  <i className="fa-solid fa-arrow-down text-gray-400 text-xs group-hover:text-primary transition-colors"></i>
                </a>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Specs Table */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Specification</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Power</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.specifications.power}W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Frame Thickness</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.specifications.frameThickness} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Cell Type</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.specifications.cellType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Connector</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.specifications.connector}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Frame Color</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.specifications.frameColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Cell</span>
                  <span className="text-gray-900 font-semibold text-sm text-right max-w-[150px]">{product.specifications.cell}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Technology</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.specifications.cellTechnology}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">CEC Model</span>
                  <span className="text-gray-900 font-semibold text-sm text-right max-w-[150px] truncate" title={product.specifications.cecModel}>{product.specifications.cecModel}</span>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Shipping Information</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Weight</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.shipping.weight} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Qty/Pallet</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.shipping.qtyPerPallet}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Dimension</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.shipping.dimension}</span>
                </div>
              </div>
            </div>

            {/* Warranty */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Warranty Information</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Product Warranty</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.warrantyInfo.productWarranty} Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-sm">Performance Warranty</span>
                  <span className="text-gray-900 font-semibold text-sm">{product.warrantyInfo.performanceWarranty} Years</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
