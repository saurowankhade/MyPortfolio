const BlogsCard = ({data}) => {
  return (
    <div >
    <div onClick={()=>{window.open(data.link,'_blank')}} className=' cursor-pointer border border-[#000000c6] group shadow-sm rounded-md hover:shadow-2xl'>
        <div>
            <img className=" rounded-ss-md w-full rounded-se-md h-[200px]" src={data?.img} alt={data.name} />
        </div>
        <div className="flex flex-col p-2">
            <h2 className="font-semibold text-[14px] mb-3 line-clamp-1">{data?.name}</h2>
            <p className="text-sm font-light  text-[#d0c8c8e3]">{data?.passage}</p>
        </div>
    </div>
</div>
  )
}

export default BlogsCard
