function filterMatchingArray(A, B, field) {
  // Lấy danh sách các symbol từ A
  const arrayA = new Set(A.map(item => item[field]));
  
  // Lọc mảng B giữ lại các object có symbol trùng với symbols trong A
  return B.filter(item => arrayA.has(item[field]));
}