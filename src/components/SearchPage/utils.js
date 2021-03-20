// import {
//   CONSULTANT, EXPERT, LAWYER, NOTARY, specializationsMap,
// } from './constants';

// export const getExpertType = (activeSpecializations) => {
//   let expert;
//   let hasLawSpecialization;
//   let hasNotarySpecialization;
//   let hasConsultantSpecialization;
//   for (let i = 0; i < activeSpecializations.length; i += 1) {
//     if (specializationsMap[i].type === 1) {
//       hasLawSpecialization = true;
//       expert = LAWYER;
//     }
//     if (specializationsMap[i].type === 2) {
//       hasNotarySpecialization = true;
//       expert = NOTARY;
//     }
//     if (specializationsMap[i].type === 3) {
//       hasConsultantSpecialization = true;
//       expert = CONSULTANT;
//     }
//     if ((hasLawSpecialization && hasNotarySpecialization)
//          || (hasLawSpecialization && hasNotarySpecialization)
//          || (hasNotarySpecialization && hasConsultantSpecialization)) {
//       expert = EXPERT;
//       break;
//     }
//   }
//   return expert;
// };

// const getExpertTypeFromUsers = (users) => {
//   let expert;
//   let hasLawSpecialization;
//   let hasNotarySpecialization;
//   let hasConsultantSpecialization;
//   for (let i = 0; i < users.length; i += 1) {
//     for (let j = 0; j < users[i].specializationIds.length; j += 1) {
//       if (specializationsMap[j].type === 1) {
//         hasLawSpecialization = true;
//         expert = LAWYER;
//       }
//       if (specializationsMap[j].type === 2) {
//         hasNotarySpecialization = true;
//         expert = NOTARY;
//       }
//       if (specializationsMap[j].type === 3) {
//         hasConsultantSpecialization = true;
//         expert = CONSULTANT;
//       }
//       if ((hasLawSpecialization && hasNotarySpecialization)
//       || (hasLawSpecialization && hasNotarySpecialization)
//       || (hasNotarySpecialization && hasConsultantSpecialization)) {
//         expert = EXPERT;
//         break;
//       }
//     }
//     if ((hasLawSpecialization && hasNotarySpecialization)
//        || (hasLawSpecialization && hasNotarySpecialization)
//        || (hasNotarySpecialization && hasConsultantSpecialization)) {
//       expert = EXPERT;
//       break;
//     }
//   }
// };

// const getGenderName = (numberOfResults, expert, users) => {
//   const hasAtLeastOneMale = users.some((element) => element.return === 'male');

//   if (numberOfResults === 1) {
//     if (expert === EXPERT) {
//       return EXPERT;
//     } if (expert === LAWYER) {
//       if (hasAtLeastOneMale) {
//         return 'Rechtsanwalt';
//       }
//       return 'Rechtsanwältin';
//     } if (expert === NOTARY) {
//       if (hasAtLeastOneMale) {
//         return 'Notar';
//       }
//       return 'Notarin';
//     } if (expert === CONSULTANT) {
//       if (hasAtLeastOneMale) {
//         return 'Berater';
//       }
//       return 'Beraterin';
//     }
//   } else if (expert === EXPERT) {
//     return 'Experten';
//   } else if (expert === LAWYER) {
//     if (hasAtLeastOneMale) {
//       return 'Rechtsanwälte';
//     }
//     return 'Rechtsanwältinnen';
//   } else if (expert === NOTARY) {
//     if (hasAtLeastOneMale) {
//       return 'Notare';
//     }
//     return 'Notarinnen';
//   } else if (expert === CONSULTANT) {
//     if (hasAtLeastOneMale) {
//       return 'Berater';
//     }
//     return 'Beraterinnen';
//   }
//   return null;
// };

// export const generateSummaryTitle = (users, activeSpecializations, numberOfResults) => {
//   if (numberOfResults === 0) {
//     return '0 results in location';
//   }
//   let expert;
//   if (activeSpecializations && activeSpecializations.length !== 0) {
//     expert = getExpertType(activeSpecializations);
//   } else {

//   }
// };
