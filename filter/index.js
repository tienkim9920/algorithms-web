// Lọc bỏ những phần tử B khác A
function filterMatchingArray(A, B, field) {
  // Lấy danh sách các symbol từ A
  const arrayA = new Set(A.map(item => item[field]));

  // Lọc mảng B giữ lại các object có symbol trùng với symbols trong A
  return B.filter(item => arrayA.has(item[field]));
}

// Cập nhật những phần tử A nếu phát hiện B khác A
function updateObjects(A, B) {
  // Chuyển A thành một Map để dễ dàng tìm kiếm object theo symbol
  const mapA = new Map(A.map(item => [item.symbol, item]));

  // Duyệt qua các phần tử của B
  B.forEach(itemB => {
    const itemA = mapA.get(itemB.symbol);

    // Nếu itemA tồn tại và bất kỳ field nào khác nhau, cập nhật itemA bằng itemB
    if (itemA) {
      const keysA = Object.keys(itemA);
      const keysB = Object.keys(itemB);

      // So sánh tất cả các field
      const isDifferent = keysB.some(key => itemA[key] !== itemB[key]);

      // Nếu khác, thay thế itemA bằng itemB
      if (isDifferent) {
        mapA.set(itemB.symbol, itemB);
      }
    }
  });

  // Trả về mảng A đã được cập nhật
  return Array.from(mapA.values());
}