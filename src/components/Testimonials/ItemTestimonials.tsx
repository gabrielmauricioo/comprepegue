import { Card } from "../ui/card";

interface ItemTestimonialsProps {
  text1: string;
  text2: string;
  testimonial: string;
}

export function ItemTestimonials({ text1, text2, testimonial }: ItemTestimonialsProps) {
  return (
    <Card className="flex flex-col w-full max-w-[360px] sm:max-w-[400px] h-auto bg-grey-light shadow-custom-card-2 justify-center items-center xl:p-6 p-12">
      <p className="w-full text-base sm:text-base leading-[140%] mb-4">{text1}</p>
      <p className="w-full text-base sm:text-base leading-[140%] mb-5">{text2}</p>
      <span className="font-medium w-full text-base">{testimonial}</span>
    </Card>
  );
}
