import { useState, useEffect, useCallback, useMemo } from "react";

const useSlider = (data, itemsPerPage, autoplayInterval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  // 슬라이더 비활성화 여부
  const isSliderDisabled = useMemo(
    () => itemsPerPage >= data.length,
    [itemsPerPage, data.length]
  );

  // 현재 보여줄 데이터 계산 (메모이제이션 처리)
  const visibleData = useMemo(
    () =>
      itemsPerPage
        ? data.slice(currentIndex, currentIndex + itemsPerPage)
        : [data[currentIndex]],
    [data, currentIndex, itemsPerPage]
  );

  // 이전 버튼 핸들러
  const handlePrev = useCallback(() => {
    if (isSliderDisabled) return;
    setCurrentIndex((prev) =>
      prev === 0
        ? data.length - (itemsPerPage || 1)
        : prev - (itemsPerPage || 1)
    );
    stopAutoplay();
  }, [data.length, itemsPerPage, isSliderDisabled, stopAutoplay]);

  // 다음 버튼 핸들러
  const handleNext = useCallback(() => {
    if (isSliderDisabled) return;
    setCurrentIndex((prev) =>
      prev + (itemsPerPage || 1) >= data.length ? 0 : prev + (itemsPerPage || 1)
    );
    stopAutoplay();
  }, [data.length, itemsPerPage, isSliderDisabled, stopAutoplay]);

  // Autoplay 시작
  const startAutoplay = useCallback(() => {
    if (isSliderDisabled) return;
    setIsAutoplaying(true);
  }, [isSliderDisabled]);

  // Autoplay 중지
  const stopAutoplay = useCallback(() => {
    setIsAutoplaying(false);
  }, []);

  // Autoplay 타이머 관리
  useEffect(() => {
    if (!isAutoplaying || isSliderDisabled) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + (itemsPerPage || 1) >= data.length
          ? 0
          : prev + (itemsPerPage || 1)
      );
    }, autoplayInterval);

    return () => clearInterval(timer); // cleanup
  }, [
    isAutoplaying,
    itemsPerPage,
    data.length,
    autoplayInterval,
    isSliderDisabled,
  ]);

  return {
    visibleData,
    currentIndex,
    isAutoplaying,
    isSliderDisabled,
    handlePrev,
    handleNext,
    startAutoplay,
    stopAutoplay,
  };
};

export default useSlider;
