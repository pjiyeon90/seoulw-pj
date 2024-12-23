// 페이지 이동하면서 헤더에 표시할 값 저장하는 곳
import { create } from "zustand";

const useMovePageStore = create((set) => ({
  //카테고리 페이지
  movePageData: [0,1],
  setMovePageData: (genre, all) => {
    set({ movePageData: [genre, all] });
  },

  //디테일 페이지
  moveDetailData: "", //오브젝트로 변경
  setMoveDetailData: (title) => {
    set({ moveDetailData: title });   //제목 외 공연state정보, 예매주소 쓰게
  },
}));

export default useMovePageStore;
