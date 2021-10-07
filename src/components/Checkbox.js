

export default function Checkbox({text, ...rest}){
    return(
        <div>
            <label>
                        <input type="checkbox" {...rest}/>
                        <span>{text}</span>
                    </label>
        </div>
    )
}