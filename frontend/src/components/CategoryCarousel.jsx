import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Software Developer",
  "FullStack Developer"
]

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {
            category.map((cat, index) => {
              <CarouselItem className='md:basis-1/2 lg-basis-1/3'>
                <Button onClick={searchJobHandler} variant='outline' className='rounded-full'>{cat}</Button>
              </CarouselItem>;
            })
          }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default CategoryCarousel