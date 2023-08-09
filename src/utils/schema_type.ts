const schema_type = {
    required( type: SchemaType ){
        return {
            type, 
            required: true
        } 
    },
    string(){
        return {
            type: String
        }
    },
    boolean(){
        return {
            type: Boolean
        }
    },
    number(){
        return {
            type: Number
        }
    }
}

type SchemaType = NumberConstructor | StringConstructor | BooleanConstructor | NumberConstructor[] | BooleanConstructor[] | StringConstructor[];

export default schema_type;