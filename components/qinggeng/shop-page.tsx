"use client"

import Image from "next/image"
import { ChevronRight } from "./icons"

const featuredProducts = [
  { name: "环保包袋", image: "/images/product-bag.jpg" },
  { name: "手工陶瓷", image: "/images/product-pottery.jpg" },
]

const products = [
  {
    name: "环保乡村包袋手机系物",
    price: 39,
    seller: "大学生创作者",
    image: "/images/product-bag.jpg",
  },
  {
    name: "手工陶瓷收藏装图片",
    price: 39,
    seller: "大学生创作者",
    image: "/images/product-pottery.jpg",
  },
  {
    name: "古村乡村农村袋包包",
    price: 39,
    seller: "大学生创作者",
    image: "/images/product-postcards.jpg",
  },
  {
    name: "古村晶片图片的片片片",
    price: 39,
    seller: "大学生创作者",
    image: "/images/product-postcards.jpg",
  },
  {
    name: "助农摄影农格生倒鎧簇",
    price: 39,
    seller: "大学生创作者",
    image: "/images/photography.jpg",
  },
  {
    name: "手工法陶瓷的手工陶瓷产品",
    price: 39,
    seller: "大学生创作者",
    image: "/images/product-pottery.jpg",
  },
]

export default function ShopPage() {
  return (
    <div className="flex flex-col h-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#3DBBA0] px-4 pt-2 pb-4">
        <h1 className="text-[#fff] text-lg font-semibold text-center">
          文创商城
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Featured Section */}
        <div className="px-4 mt-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#333] font-bold text-base">热门推荐</h3>
            <button className="flex items-center gap-0.5 text-[#999] text-xs">
              <ChevronRight />
            </button>
          </div>
          <div className="flex gap-3">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="flex-1 bg-[#fff] rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-28">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#333] text-sm font-medium text-center py-2.5">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hot Recommendation */}
        <div className="px-4 mt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#333] font-bold text-base">热门推荐</h3>
            <button className="flex items-center gap-0.5 text-[#999] text-xs">
              <ChevronRight />
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-3 pb-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[#fff] rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-32">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5">
                  <p className="text-[#333] text-xs font-medium leading-tight line-clamp-2 min-h-[2rem]">
                    {product.name}
                  </p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-[#E6A700] font-bold text-sm">
                      {"¥"}{product.price}
                    </span>
                    <span className="text-[#999] text-[10px] bg-[#FFF8E1] px-1.5 py-0.5 rounded">
                      {product.seller}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
