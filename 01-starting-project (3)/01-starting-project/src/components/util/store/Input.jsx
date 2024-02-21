export default function input ({label, id}) {
    return <p className="control">
        <label htmlFor={id}></label>
        <input id={id} />
    </p>
}