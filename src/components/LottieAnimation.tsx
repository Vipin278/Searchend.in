import Lottie from 'lottie-react';


interface LottieAnimationProps {
  animationData: string; // Change type from object to string

  width?: string;
  height?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, width = "300px", height = "300px" }) => {
  return (
    <Lottie 
      animationData={animationData} 
      loop 
      autoplay 
      style={{ width, height }} 
    />
  );
};

export default LottieAnimation;
