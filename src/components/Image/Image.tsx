import {useState} from "react";
import noImage from '../../assets/no-image.png';

const Image = ({ src, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [isError, isErrorSet] = useState(false)
  return (
    <img 
      {...props}
      src={isError ? noImage : src} 
      onError={() => isErrorSet(true)}
    />
  )
}

export default Image
