

const FlotingCart = () => {
  return (
    <div>
         {/* Floating Cart Badge */}
      <div className="fixed bottom-8 left-8 bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-700 transition-colors z-50">
        <div className="text-center">
          <div className="text-2xl font-bold">$39</div>
          <div className="text-xs">0 items</div>
        </div>
      </div>
    </div>
  )
}

export default FlotingCart