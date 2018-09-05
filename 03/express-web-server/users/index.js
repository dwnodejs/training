module.exports.validate = async function validate(user) {
    if (!user.name) {
        throw new Error('Name is missing');
    }

    return {
        user,
        valid: true
    };
}