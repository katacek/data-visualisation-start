"use client";

import AreaChartPlotDynamic from "@/components/AreaChartPlotDynamic";
import BarChartPlotDynamic from "@/components/BarChartPlotDynamic";
import LineChartPlotDynamic from "@/components/LineChartPlotDynamic";
import PieChartPlotDynamic from "@/components/PieChartPlotDynamic";
import RadarChartPlotDynamic from "@/components/RadarChartPlotDynamic";
import React, { useState, useEffect } from "react";

export default function Playground() {
  const [rawData, setRawData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  // TODO: use react query for the loading state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchData = await fetch("/api/getData");
        const rawData = await fetchData.json();
        console.log('🚀 ~ fetchData ~ rawData:', rawData);
        setRawData(rawData);
        setIsLoading(false);
        // setProduct(rawData.products[0]);

      } catch (err) {
        console.log({ err });
        alert("Smt went wrong when fetching data");
      }
        console.log('🚀 ~ fetchData ~ rawData:', rawData);
    };
    fetchData().catch(console.error);
  }, []);

  const priceDic = {};
  let title = '';
  // TODO: dynamically load all product categories and title, now only the first one
  // TODO: filtering (by period, by shop)
  if (!isLoading) {
    for(const [name, offer] of Object.entries(rawData.products[0].offers))
      {
        for(const [date,price] of Object.entries(offer.priceHistory))
              {
                  if(priceDic[date])
                  {
                      priceDic[date][name]=price;
                  }
                  else
                  {
                      priceDic[date]= {};
                      priceDic[date][name]=price;
                  }
              }
      }
      title = rawData.products[0].name;
    }
  const processedData = Object.keys(priceDic).map((date)=> {return {year:date,...priceDic[date]}})

  // re-calculate price to czk
  processedData.map((x) => {
    x['kolokram.cz'] = x['kolokram.cz']/25 ?? 0;
    x['mtbiker.cz'] = x['mtbiker.cz']/25 ?? 0;
  })

  console.log('🚀 ~ Playground ~ processedData:', processedData);


  return (
    <>
    <div className="flex">
      <main className="flex-grow relative">
      <header>
        <div
        class="relative h-[350px] overflow-hidden bg-[url('/charts_cover_image.jpeg')] bg-cover bg-[50%] bg-no-repeat">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
          <div class="flex h-full items-center justify-center">
            <div class="px-6 text-center text-white md:px-12">
              <h1 class="mb-6 text-5xl font-bold">Data visualisation</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
        {/* TODO: Loader */}
        { isLoading && <p>Data are being loaded</p> }
        <section className="flex my-4 px-4 gap-3">
        <div className="w-1/2 h-[300px] bg-gray-700 rounded"><AreaChartPlotDynamic data={processedData} title={title}/></div>
        <div className="w-1/2 h-[300px] bg-gray-700 rounded"><BarChartPlotDynamic data={processedData} title={title}/></div>
        </section>

      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"><PieChartPlotDynamic data={processedData} title={title}/></div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"><LineChartPlotDynamic data={processedData} title={title}/></div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"><RadarChartPlotDynamic data={processedData} title={title}/></div>
      </section>
      </main>
    </div>
    </>
  )
}