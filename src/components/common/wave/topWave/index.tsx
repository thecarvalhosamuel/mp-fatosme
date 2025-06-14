interface TopProps {
  colorFill?: string
}
export function Top({ colorFill }: TopProps) {
  return (
    <div className='absolute top-0 left-0 z-10 w-full'>
      <svg
        viewBox='0 0 1440 100'
        className='h-[80px] w-full scale-y-[-1] transform'
        preserveAspectRatio='none'
      >
        <path
          fill={colorFill || '#EFE6DF'}
          d='M0,0L48,10.7C96,21,192,43,288,53.3C384,64,480,64,576,64C672,64,768,64,864,58.7C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z'
        />
      </svg>
    </div>
  )
}
