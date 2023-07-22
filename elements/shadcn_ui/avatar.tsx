import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  interface AvatarProps {
    imageUrl: string;
    fallbackText: string;
  }
  
  export default function AvatarDemoShadCN(props: AvatarProps) {
    const { imageUrl, fallbackText } = props;
  
    return (
      <Avatar>
        <AvatarImage src={imageUrl} alt={fallbackText} />
        <AvatarFallback>{fallbackText}</AvatarFallback>
        
      </Avatar>
    )
  }
  