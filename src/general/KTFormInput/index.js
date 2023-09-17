// import Tagify from '@yaireo/tagify'
// import _ from 'lodash'
// import PropTypes from 'prop-types'
// import { useEffect, useRef, useState } from 'react'
// import './style.scss'
// import Inputmask from 'inputmask'
// import moment from 'moment'
// import $ from 'jquery'

// window.$ = window.jQuery = require('jquery')
// window.moment = require('moment')

// require('bootstrap-maxlength')
// require('tempusdominus-bootstrap-4')
// require('daterangepicker')
// require('bootstrap-timepicker')

// export const KTFormInputType = {
//   text: 'text',
//   search: 'search',
//   email: 'email',
//   url: 'url',
//   telephone: 'tel',
//   password: 'password',
//   number: 'number',
//   datetime: 'datetime-local',
//   date: 'date',
//   month: 'month',
//   week: 'week',
//   time: 'time',
//   color: 'color',
//   range: 'range',

//   tagify: 'tagify',
//   btdPicker: 'btd-picker', // date time picker
//   dateRangePicker: 'date-range-picker', // date range picker
//   bsDatePicker: 'bs-date-picker', // bootstrap date picker
//   bsTimePicker: 'bs-time-picker', // bootstrap time picker
// }

// export const KTFormInputSize = {
//   default: '',
//   large: 'form-control-lg',
//   small: 'form-control-sm',
// }

// export const KTFormInputIconPosition = {
//   left: 'input-icon-left',
//   right: 'input-icon-right',
// }

// export const KTFormInputGroupType = {
//   text: 'text',
//   button: 'button',
// }

// export const KTFormInputBTDPickerType = {
//   dateTime: 'date-time',
//   date: 'date',
//   time: 'time',
//   dateRange: 'date-range',
// }

// KTFormInput.propTypes = {
//   // required
//   type: PropTypes.oneOf(Object.values(KTFormInputType)).isRequired,
//   name: PropTypes.string.isRequired,

//   // optional
//   value: PropTypes.string,
//   placeholder: PropTypes.string,
//   text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//   solidBackground: PropTypes.bool,
//   disabled: PropTypes.bool,
//   readonly: PropTypes.bool,
//   size: PropTypes.oneOf(Object.values(KTFormInputSize)),
//   isCustom: PropTypes.bool,
//   additionalInputClassName: PropTypes.string,
//   additionalClassName: PropTypes.string,

//   onChange: PropTypes.func,
//   onBlur: PropTypes.func,
//   onFocus: PropTypes.func,
//   enableCheckValid: PropTypes.bool,
//   isTouched: PropTypes.bool,
//   isValid: PropTypes.bool,
//   feedbackText: PropTypes.string,
//   inputMask: PropTypes.object,

//   // max length
//   maxLength: PropTypes.number,
//   maxLengthWarningClass: PropTypes.string,
//   maxLengthReachedClass: PropTypes.string,
//   maxLengthCustomSeparator: PropTypes.string,
//   maxLengthCustomPreText: PropTypes.string,
//   maxLengthCustomPostText: PropTypes.string,

//   enableInputGroup: PropTypes.bool,
//   inputGroupType: PropTypes.oneOf(Object.values(KTFormInputGroupType)),
//   prependElements: PropTypes.arrayOf(
//     PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//   ),
//   appendElements: PropTypes.arrayOf(
//     PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//   ),

//   enableInputIcon: PropTypes.bool,
//   inputIconPosition: PropTypes.oneOf(Object.values(KTFormInputIconPosition)),
//   inputIconElement: PropTypes.element,

//   // tagify
//   tagifyDataBlackList: PropTypes.string,
//   tagifyDataWhiteList: PropTypes.string,
//   tagifyOutside: PropTypes.bool,
//   tagifyUserInput: PropTypes.bool,

//   // btd-picker
//   btdPickerType: PropTypes.oneOf(Object.values(KTFormInputBTDPickerType)),
//   btdPickerNoIcon: PropTypes.bool,
//   btdPickerLocale: PropTypes.string,
//   btdDisabledDates: PropTypes.arrayOf(PropTypes.string),

//   // date-range-picker
//   drpAutoUpdateInput: PropTypes.bool,
//   drpEnableTimePicker: PropTypes.bool,
//   drpSingleDatePicker: PropTypes.bool,
//   drpEnablePredefinedRange: PropTypes.bool,

//   // bootstrap time picker
//   bsTimePicker24hMode: PropTypes.bool,
//   bsTimePickerMinuteStep: PropTypes.number,
//   bsTimePickerShowSecond: PropTypes.bool,
//   bsTimePickerSecondStep: PropTypes.number,
// }

// KTFormInput.defaultProps = {
//   value: '',
//   placeholder: '',
//   text: '',
//   solidBackground: false,
//   disabled: false,
//   readonly: false,
//   size: KTFormInputSize.default,
//   isCustom: true,
//   additionalInputClassName: '',
//   additionalClassName: '',

//   onChange: null,
//   onBlur: null,
//   onFocus: null,
//   enableCheckValid: false,
//   isValid: true,
//   isTouched: false,
//   feedbackText: '',
//   inputMask: { type: 'text', mask: '', used: false },

//   // max length
//   maxLength: 0,
//   maxLengthWarningClass: 'label label-danger label-rounded label-inline',
//   maxLengthReachedClass: 'label label-primary label-rounded label-inline',
//   maxLengthCustomSeparator: '/',
//   maxLengthCustomPreText: '',
//   maxLengthCustomPostText: '',

//   enableInputGroup: false,
//   inputGroupType: KTFormInputGroupType.text,
//   prependElements: null,
//   appendElements: null,

//   enableInputIcon: false,
//   inputIconPosition: KTFormInputIconPosition.left,
//   inputIconElement: null,

//   // tagify
//   tagifyDataBlackList: '',
//   tagifyDataWhiteList: '',
//   tagifyOutside: false,
//   tagifyUserInput: true,

//   // btd-picker
//   btdPickerType: null,
//   btdPickerNoIcon: false,
//   btdPickerLocale: 'en',
//   btdDisabledDates: null,

//   // date-range-picker
//   drpAutoUpdateInput: true,
//   drpEnableTimePicker: false,
//   drpSingleDatePicker: false,
//   drpEnablePredefinedRange: false,

//   // bootstrap time picker
//   bsTimePicker24hMode: false,
//   bsTimePickerMinuteStep: 1,
//   bsTimePickerShowSecond: false,
//   bsTimePickerSecondStep: 1,
// }

// /**
//  *
//  * @param {{
//  * type: string,
//  * name: string,
//  * value: string,
//  * placeholder: string,
//  * text: string | element,
//  * solidBackground: boolean,
//  * disabled: boolean,
//  * readonly: boolean,
//  * size: string,
//  * isCustom: boolean,
//  * additionalInputClassName: string,
//  * additionalClassName: string,
//  * onChange: function,
//  * onBlur: function,
//  * onFocus: function,
//  * enableCheckValid: boolean,
//  * isValid: boolean,
//  * isTouched: boolean,
//  * feedbackText: string,
//  * maxLength: number,
//  * maxLengthWarningClass: string,
//  * maxLengthReachedClass: string,
//  * maxLengthCustomSeparator: string,
//  * maxLengthCustomPreText: string,
//  * maxLengthCustomPostText: string,
//  * enableInputGroup: boolean,
//  * inputGroupType: string,
//  * prependElements: [],
//  * appendElements: [],
//  * enableInputIcon,
//  * inputIconPosition,
//  * inputIconElement: element,
//  * tagifyDataBlackList: string,
//  * tagifyDataWhiteList: string,
//  * tagifyOutside: boolean,
//  * tagifyUserInput: boolean,
//  * btdPickerType: string?,
//  * btdPickerNoIcon: boolean,
//  * btdPickerLocale: string,
//  * btdDisabledDates: string[],
//  * drpAutoUpdateInput: boolean,
//  * drpEnableTimePicker: boolean,
//  * drpSingleDatePicker: boolean,
//  * drpEnablePredefinedRange: boolean,
//  *
//  * bsTimePicker24hMode: boolean,
//  * bsTimePickerMinuteStep: number,
//  * bsTimePickerShowSecond: boolean,
//  * bsTimePickerSecondStep: number,
//  * inputMask: object,
//  * }} props
//  * @returns
//  */
// function KTFormInput(props) {
//   // MARK: --- Params ---
//   const {
//     type,
//     name,

//     value,
//     placeholder,
//     text,
//     solidBackground,
//     disabled,
//     readonly,
//     size,
//     isCustom,
//     additionalInputClassName,
//     additionalClassName,
//     onChange,
//     onBlur,
//     onFocus,
//     enableCheckValid,
//     isValid,
//     isTouched,
//     feedbackText,
//     inputMask,

//     // max length
//     maxLength,
//     maxLengthWarningClass,
//     maxLengthReachedClass,
//     maxLengthCustomSeparator,
//     maxLengthCustomPreText,
//     maxLengthCustomPostText,

//     enableInputGroup,
//     inputGroupType,
//     prependElements,
//     appendElements,

//     enableInputIcon,
//     inputIconPosition,
//     inputIconElement,

//     // tagify
//     tagifyDataBlackList,
//     tagifyDataWhiteList,
//     tagifyOutside,
//     tagifyUserInput,

//     // btd-picker
//     btdPickerType,
//     btdPickerNoIcon,
//     btdPickerLocale,
//     btdDisabledDates,

//     // date-range-picker
//     drpAutoUpdateInput,
//     drpEnableTimePicker,
//     drpSingleDatePicker,
//     drpEnablePredefinedRange,

//     // bootstrap time picker
//     bsTimePicker24hMode,
//     bsTimePickerMinuteStep,
//     bsTimePickerShowSecond,
//     bsTimePickerSecondStep,
//   } = props

//   const [inputValue, setInputValue] = useState(value)
//   const [passwordEyeOn, setPasswordEyeOn] = useState(false)

//   const refTagify = useRef(null)
//   const inputmaskInstance = useRef(null)
//   const refInput = useRef(null)

//   // MARK: --- Functions ---
//   function handleChange(e) {
//     // if (type === KTFormInputType.bsTimePicker) {
//     //   return;
//     // }
//     const targetValue = e?.target?.value
//     setInputValue(targetValue)
//     if (onChange) {
//       onChange(targetValue)
//     }
//   }

//   function handleBlur() {
//     if (onBlur) {
//       onBlur()
//     }
//   }

//   function handleFocus() {
//     if (onFocus) {
//       onFocus()
//     }
//   }

//   // MARK: --- Hooks ---
//   useEffect(() => {
//     // tagify
//     if (type === KTFormInputType.tagify && _.isNull(refTagify.current)) {
//       const inputEl = document.getElementById(name)
//       if (inputEl) {
//         const arrWhiteList = _.chain(tagifyDataWhiteList)
//           .split(',')
//           .compact()
//           .value()
//         const arrBlackList = _.chain(tagifyDataBlackList)
//           .split(',')
//           .compact()
//           .value()
//         const options = {
//           id: name,
//           whitelist: arrWhiteList,
//           blacklist: arrBlackList,
//           userInput: tagifyUserInput,
//           dropdown: {
//             position: 'tags',
//             // 0: always opens dropdown when input gets focus
//             // 1: show suggestion after 1 typed character
//             enabled: 0,
//           },
//         }
//         refTagify.current = new Tagify(inputEl, options)
//       }
//     }

//     // maxlength
//     if (maxLength > 0) {
//       $(`#${name}`).maxlength({
//         warningClass: maxLengthWarningClass,
//         limitReachedClass: maxLengthReachedClass,
//         separator: maxLengthCustomSeparator,
//         preText: maxLengthCustomPreText,
//         postText: maxLengthCustomPostText,
//       })
//     }

//     // btd-picker
//     if (type === KTFormInputType.btdPicker) {
//       const options = {
//         // custom icon
//         icons: {
//           time: 'ki ki-clock',
//           date: 'ki ki-calendar',
//         },
//         // locale
//         locale: btdPickerLocale,
//         // default date
//         defaultDate: inputValue,
//       }
//       if (btdPickerType === KTFormInputBTDPickerType.dateTime) {
//         options.format = 'DD/MM/YYYY HH:mm'
//       }
//       if (btdPickerType === KTFormInputBTDPickerType.date) {
//         options.format = 'DD/MM/YYYY'
//       }
//       if (btdPickerType === KTFormInputBTDPickerType.time) {
//         options.format = 'HH:mm'
//       }
//       if (btdDisabledDates) {
//         options.disabledDates = btdDisabledDates
//       }
//       $(`#${name}`).datetimepicker(options)
//     }

//     // date range picker
//     if (type === KTFormInputType.dateRangePicker) {
//       const options = {
//         buttonClasses: 'btn',
//         applyClass: 'btn-primary',
//         cancelClass: 'btn-secondary',

//         opens: 'right',
//         autoUpdateInput: drpAutoUpdateInput,
//         timePicker: drpEnableTimePicker,
//         singleDatePicker: drpSingleDatePicker,
//       }
//       if (drpEnablePredefinedRange) {
//         options.ranges = {
//           Today: [moment(), moment()],
//           Yesterday: [
//             moment().subtract(1, 'days'),
//             moment().subtract(1, 'days'),
//           ],
//           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//           'This Month': [moment().startOf('month'), moment().endOf('month')],
//           'Last Month': [
//             moment().subtract(1, 'month').startOf('month'),
//             moment().subtract(1, 'month').endOf('month'),
//           ],
//         }
//       }

//       $(`#${name}`).daterangepicker(options, function (start, end, label) {
//         // $('#kt_daterangepicker_2 .form-control').val(start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));
//         // console.log({ start, end, label });
//         setInputValue(
//           start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'),
//         )
//       })
//     }

//     // bootstrap time picker
//     if (type === KTFormInputType.bsTimePicker) {
//       const options = {
//         icons: {
//           up: 'ki ki-arrow-up',
//           down: 'ki ki-arrow-down',
//         },
//         showMeridian: bsTimePicker24hMode ? false : true,
//         minuteStep: bsTimePickerMinuteStep,
//         showSeconds: bsTimePickerShowSecond,
//         secondStep: bsTimePickerSecondStep,
//       }
//       $(`#${name}`).timepicker(options)

//       $(`#${name}`).on('hide.timepicker', function (e) {
//         const timeValue = e?.time?.value
//         console.log({ timeValue })
//       })
//       $(`#${name}`).on('changeTime.timepicker', function (e) {
//         // const timeValue = e?.time?.value;
//         // console.log({ timeValue });
//       })
//     }

//     // bootstrap date picker
//     if (type === KTFormInputType.bsDatePicker) {
//       const options = {}
//       // $(`#${name}`).datepicker();

//       // $(`#${name}`).on('hide.timepicker', function (e) {
//       //   const timeValue = e?.time?.value;
//       //   console.log({ timeValue });
//       // });
//       // $(`#${name}`).on('changeTime.timepicker', function (e) {
//       // const timeValue = e?.time?.value;
//       // console.log({ timeValue });
//       // });
//     }
//   }, [])

//   useEffect(() => {
//     // console.log(`KTFormInput[${name}] re-render`);
//   })

//   useEffect(() => {
//     setInputValue(value)
//   }, [value])

//   useEffect(() => {
//     let { used, mask, type } = inputMask
//     if (used) {
//       switch (type) {
//         case 'number': {
//           inputmaskInstance.current = new Inputmask({
//             alias: 'numeric',
//             groupSeparator: '.',
//             autoGroup: true,
//             digits: 2,
//             radixPoint: ',',
//             rightAlign: false,
//           })

//           inputmaskInstance.current.mask(refInput.current)

//           return () => {
//             if (inputmaskInstance.current) {
//               inputmaskInstance.current.remove()
//             }
//           }
//         }

//         case 'text': {
//           inputmaskInstance.current = new Inputmask({
//             regex: mask,
//           })

//           inputmaskInstance.current.mask(refInput.current)

//           return () => {
//             if (inputmaskInstance.current) {
//               inputmaskInstance.current.remove()
//             }
//           }
//         }
//         default:
//           break
//       }
//     }
//   }, [])

//   return (
//     <div className={`KTFormInput ${additionalClassName}`}>
//       <div
//         className={`position-relative
//                     ${
//                       enableInputGroup || type === KTFormInputType.btdPicker
//                         ? `input-group ${
//                             solidBackground ? 'input-group-solid' : ''
//                           }`
//                         : enableInputIcon
//                         ? `input-icon ${inputIconPosition}`
//                         : ''
//                     }
//                 `}
//       >
//         {enableInputGroup &&
//           prependElements &&
//           prependElements.map((item, index) => {
//             return (
//               <div key={index} className="input-group-prepend">
//                 {inputGroupType === KTFormInputGroupType.text && (
//                   <span className="input-group-text">{item}</span>
//                 )}
//                 {inputGroupType === KTFormInputGroupType.button && item}
//               </div>
//             )
//           })}
//         <input
//           className={`
//                         form-control
//                         ${additionalInputClassName}
//                         ${solidBackground ? 'form-control-solid' : ''}
//                         ${size}
//                         ${
//                           type === KTFormInputType.range && isCustom
//                             ? 'custom-range border-0'
//                             : ''
//                         }
//                         ${type === KTFormInputType.tagify ? 'tagify' : ''}
//                         ${
//                           type === KTFormInputType.btdPicker
//                             ? 'datetimepicker-input'
//                             : ''
//                         }
//                         ${
//                           enableCheckValid && isTouched
//                             ? `${isValid ? 'form-valid' : 'form-invalid'}`
//                             : ''
//                         }
//                     `}
//           style={{
//             appearance:
//               type === KTFormInputType.range && !isCustom ? 'auto' : '',
//           }}
//           ref={refInput}
//           type={
//             type === KTFormInputType.password && passwordEyeOn ? 'text' : type
//           }
//           name={name}
//           id={name}
//           value={inputValue}
//           placeholder={placeholder}
//           disabled={disabled}
//           readOnly={readonly}
//           maxLength={maxLength > 0 ? `${maxLength}` : ''}
//           data-toggle={
//             type === KTFormInputType.btdPicker && btdPickerNoIcon
//               ? 'datetimepicker'
//               : ''
//           }
//           autoComplete="new-password"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           onFocus={handleFocus}
//         />
//         {/* password eye on/off */}
//         {type === KTFormInputType.password && (
//           <div
//             className="position-absolute h-100 right-0 top-0 d-flex align-items-center px-4 cursor-pointer hover-opacity-60"
//             onClick={() => {
//               setPasswordEyeOn(!passwordEyeOn)
//             }}
//           >
//             <i className={passwordEyeOn ? 'fas fa-eye-slash' : 'fas fa-eye'} />
//           </div>
//         )}
//         {/* input group */}
//         {type === KTFormInputType.btdPicker && !btdPickerNoIcon && (
//           <div
//             className="input-group-append"
//             data-toggle={
//               type === KTFormInputType.btdPicker && !btdPickerNoIcon
//                 ? 'datetimepicker'
//                 : ''
//             }
//             data-target={
//               type === KTFormInputType.btdPicker && !btdPickerNoIcon
//                 ? `#${name}`
//                 : ''
//             }
//           >
//             <span className="input-group-text">
//               <i
//                 className={`ki ki-${
//                   btdPickerType === KTFormInputBTDPickerType.time
//                     ? 'clock'
//                     : 'calendar'
//                 }`}
//               />
//             </span>
//           </div>
//         )}
//         {type !== KTFormInputType.btdPicker &&
//           enableInputGroup &&
//           appendElements &&
//           appendElements.map((item, index) => {
//             return (
//               <div key={index} className="input-group-append">
//                 {inputGroupType === KTFormInputGroupType.text && (
//                   <span className="input-group-text">{item}</span>
//                 )}
//                 {inputGroupType === KTFormInputGroupType.button && item}
//               </div>
//             )
//           })}

//         {/* input icon */}
//         {enableInputIcon && inputIconElement && <span>{inputIconElement}</span>}

//         {/* {!enableInputGroup && !enableInputIcon && type !== KTFormInputType.btdPicker && (
//           <>
//             {enableCheckValid && isTouched && !_.isEmpty(feedbackText) && (
//               <div className={`${isValid ? 'valid-feedback' : 'invalid-feedback'}`}>
//                 {feedbackText}
//               </div>
//             )}
//             {!_.isEmpty(text) && <span className="form-text text-muted">{text}</span>}
//           </>
//         )} */}
//       </div>
//       {/* {(enableInputGroup || enableInputIcon || type === KTFormInputType.btdPicker) && ( */}
//       <>
//         {enableCheckValid && isTouched && !_.isEmpty(feedbackText) && (
//           <div className={`${isValid ? 'valid-feedback' : 'invalid-feedback'}`}>
//             {feedbackText}
//           </div>
//         )}
//         {!_.isEmpty(text) && (
//           <span className="form-text text-muted">{text}</span>
//         )}
//       </>
//       {/* )} */}
//     </div>
//   )
// }

// export default KTFormInput
