import type { Ghe } from "../services/datve.type"

interface SeatItemProps {
  ghe: Ghe
  isSelected: boolean
  onSelect: (ghe: Ghe) => void
}

export const SeatItem = ({ ghe, isSelected, onSelect }: SeatItemProps) => {
  const isDisabled = ghe.daDat // Ghế đã đặt = disabled
  
  return (
    <button
      onClick={() => !isDisabled && onSelect(ghe)}
      disabled={isDisabled}
      className={`
        w-8 h-8 rounded text-xs font-bold transition-all
        ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : ''}
        ${isSelected ? 'bg-red-600 text-white' : 'bg-green-500 text-white hover:bg-green-600'}
      `}
      title={`${ghe.tenGhe} - ${ghe.loaiGhe}`}
    >
      {ghe.stt}
    </button>
  )
}