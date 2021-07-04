export default function primitiveSample() {
    let name: string = 'ま―'
    name = 'あいう'
    console.log(name, "type:", typeof name);

    let boo: boolean = true

    if (boo) {
        console.log(boo, "type:", typeof boo)
    }
    if (!boo) {
        console.log("false")
    }
}