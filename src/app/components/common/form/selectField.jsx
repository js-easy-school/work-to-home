import PropTypes from 'prop-types'

const SelectField = ({ label, value, onChange, defaultOption, options, error }) => {
    const getInputClasses = () => {
        return 'border-2 form-select' + (error ? ' is-invalid' : '')
    }

    const optionsArray =
        !Array.isArray(options) && typeof options === 'object'
            ? Object.keys(options).map((optionName) => ({
                  name: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options
    return (
        <div className='m-3 ms-3 me-3'>
            <label htmlFor='validationCustom04' className='form-label'>
                {label}
            </label>
            <select
                className={getInputClasses()}
                id='validationCustom04'
                name='profession'
                value={value}
                onChange={onChange}
            >
                <option disabled value=''>
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.name}
                        </option>
                    ))}
            </select>
            {error && <div className='invalid-feedback'>{error}</div>}
        </div>
    )
}

// Устанавливаем значение по умолчанию для пропса type, если он не передан
SelectField.defaultProps = {
    type: 'text'
}

// Описываем, какие пропсы принимает компонент TextField и какого типа они должны быть
SelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
}

export default SelectField
