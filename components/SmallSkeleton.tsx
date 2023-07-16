import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SmallSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton style={{ width: "5rem", height: "2rem" }} />
    </SkeletonTheme>
  );
}
