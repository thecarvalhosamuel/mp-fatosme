interface BottomProps {
  colorFill?: string
}

export function Bottom({ colorFill = '#EFE6DF' }: BottomProps) {
  return (
    <div className='absolute bottom-0 left-0 z-10 w-full'>
      <svg
        viewBox='0 0 1440 100'
        className='h-[80px] w-full scale-y-[-1] transform'
        preserveAspectRatio='none'
      >
        <path
          fill={colorFill}
          d='M0,96L48,85.3C96,75,192,53,288,42.7C384,32,480,32,576,32C672,32,768,32,864,37.3C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        />
      </svg>
    </div>
  )
}
