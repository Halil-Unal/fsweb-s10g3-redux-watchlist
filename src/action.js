export const LİSTEME_EKLE = "LİSTEME_EKLE";
export const DELETE_MOVIE = "DELETE_MOVIE";


export function deletemovie(item) {
  return { type: DELETE_MOVIE, payload: item };
}
export function listeyeEkle(item) {
  return { type: LİSTEME_EKLE, payload: item };
}