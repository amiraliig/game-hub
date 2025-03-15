import image from "../../public/empty.jpeg"
const getCroppedImage = (baseUrl) => {
    if (!baseUrl) { return image }
    const target = "/media"
    const index = baseUrl.indexOf(target, 17) + target.length
    return baseUrl.slice(0, index) + "/crop/600/400/" + baseUrl.slice(index)
}
export default getCroppedImage