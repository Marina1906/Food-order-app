export default function input ({label, id}) {
    return(<p className="control">
        <label htmlFor={id}>{label}</label>
        <input id={id} name = {id} required {...props}/>
    </p>

    );
}