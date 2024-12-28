export const GetPhotoRef=async(placeName)=>{
    const resp=await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json'+
  '?query='+placeName+
  '&key='+'AIzaSyBGTiQScdKh4LDI7Enr5d1y5N95uXTZoHc');

  const result=await resp.json();

  console.log(result);
  return result;
}