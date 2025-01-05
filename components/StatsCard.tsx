import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Skeleton } from './ui/skeleton'


interface statsCardProps {
  title: string
  value: string
  loading: boolean
  helperText: string
  className: string
  icon : React.ReactNode
}
const StatsCard = ({title, value, loading, helperText, className, icon}: statsCardProps) => {
  return (
    <Card className={className}>
      <CardHeader className='flex flex-row items-center justify-between pb-2'>
        <CardTitle className='text-sm font-medium text-muted-foreground'>
          {title}
          
        </CardTitle>
        {icon}
        </CardHeader>
        
        <CardContent>
          <div className='text-2xl font-bold'>
             {
              loading && (<Skeleton><span className='opacity-0'>0</span></Skeleton>)
              
             }
             {!loading && value}

          </div> 
          <p className='text-xs text-muted-foreground pt-1'>{helperText}</p>
        </CardContent>
      

    </Card>
  )
}

export default StatsCard