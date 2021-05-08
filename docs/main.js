(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+uYn":
/*!******************************************************************!*\
  !*** ./src/app/content/table-student/table-student.component.ts ***!
  \******************************************************************/
/*! exports provided: TableStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableStudentComponent", function() { return TableStudentComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_enum_keyFilterStudent_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/enum/keyFilterStudent.enum */ "3CNT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_studentsTableList_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/studentsTableList.service */ "Mxp8");
/* harmony import */ var _services_schoolList_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/schoolList.service */ "UA5H");
/* harmony import */ var _services_crossCorrectors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/crossCorrectors.service */ "9fZq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_header_filter_header_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/header-filter/header-filter.component */ "VEa6");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function TableStudentComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-header-filter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangeValue", function TableStudentComponent_th_9_Template_app_header_filter_onChangeValue_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.onChangeFilterFullname($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Students")("value", ctx_r0.filterColumn == null ? null : ctx_r0.filterColumn.fullname);
} }
function TableStudentComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (element_r12 == null ? null : element_r12.student_id == null ? null : element_r12.student_id.first_name) + " " + (element_r12 == null ? null : element_r12.student_id == null ? null : element_r12.student_id.last_name), " ");
} }
function TableStudentComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-header-filter", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangeValue", function TableStudentComponent_th_12_Template_app_header_filter_onChangeValue_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.onChangeFilterSchoolOrigin($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "School Origin")("value", ctx_r2.filterColumn == null ? null : ctx_r2.filterColumn.schoolOrigin)("type", "autocomplate")("options", ctx_r2.schoolListCategory);
} }
function TableStudentComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r15 == null ? null : element_r15.school_origin_id == null ? null : element_r15.school_origin_id.short_name, " ");
} }
function TableStudentComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-header-filter", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangeValue", function TableStudentComponent_th_15_Template_app_header_filter_onChangeValue_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.onChangeFilterSchoolCorrecting($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "School Correcting")("value", ctx_r4.filterColumn == null ? null : ctx_r4.filterColumn.schoolCorrecting)("type", "autocomplate")("options", ctx_r4.schoolListCategory);
} }
function TableStudentComponent_td_16_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r20.school._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r20 == null ? null : option_r20.school == null ? null : option_r20.school.short_name, " ");
} }
function TableStudentComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function TableStudentComponent_td_16_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const element_r18 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.onChangeSchoolCorrecting($event, element_r18); })("valueChange", function TableStudentComponent_td_16_Template_mat_select_valueChange_2_listener($event) { const element_r18 = ctx.$implicit; return element_r18.school_correcting_id._id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TableStudentComponent_td_16_mat_option_3_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", element_r18.school_correcting_id._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.getSchoolOption(element_r18 == null ? null : element_r18.school_origin_id));
} }
function TableStudentComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-header-filter", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangeValue", function TableStudentComponent_th_18_Template_app_header_filter_onChangeValue_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.onChangeFilterCrossCorrector($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Cross Corrector")("value", ctx_r6.filterColumn == null ? null : ctx_r6.filterColumn.crossCorrector)("type", "autocomplate")("options", ctx_r6.crossCorrectorCategory);
} }
function TableStudentComponent_td_19_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r28._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (option_r28 == null ? null : option_r28.student_id == null ? null : option_r28.student_id.first_name) + " " + (option_r28 == null ? null : option_r28.student_id == null ? null : option_r28.student_id.last_name), " ");
} }
function TableStudentComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function TableStudentComponent_td_19_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const element_r26 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.onChangeCrossCorrector($event, element_r26); })("valueChange", function TableStudentComponent_td_19_Template_mat_select_valueChange_2_listener($event) { const element_r26 = ctx.$implicit; return element_r26.school_correcting_corrector_id._id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TableStudentComponent_td_19_mat_option_3_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", element_r26.school_correcting_corrector_id._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.getCrossOption(element_r26 == null ? null : element_r26.school_correcting_id, element_r26));
} }
function TableStudentComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 23);
} }
function TableStudentComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 24);
} }
const _c0 = function () { return [5, 10]; };
class TableStudentComponent {
    constructor(studentsTableListService, schoolListService, crossCorrectorsService) {
        this.studentsTableListService = studentsTableListService;
        this.schoolListService = schoolListService;
        this.crossCorrectorsService = crossCorrectorsService;
        // dataSource: any = {};
        this.filterColumn = {};
        this.displayedColumns = [
            'fullname',
            'schoolOrigin',
            'schoolCorrecting',
            'crossCorrector',
        ];
        this.filterColumn = this.studentsTableListService.filter;
        this.schoolListCategory = this.schoolListService.getCategory();
        this.crossCorrectorCategory = this.crossCorrectorsService.getCategory();
        const studentsTableList = studentsTableListService.studentsTableList;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](studentsTableList);
        studentsTableListService.studentsTableListChange.subscribe((value) => {
            console.log('value', value);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](value);
            this.dataSource.paginator = this.paginator; // For pagination
        });
        studentsTableListService.filterChange.subscribe((value) => {
            this.filterColumn = value;
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator; // For pagination
        // this.dataSource.sort = this.sort; // For sort
    }
    onChangeFilterFullname(value) {
        this.studentsTableListService.updateFilter(src_app_enum_keyFilterStudent_enum__WEBPACK_IMPORTED_MODULE_2__["default"].fullname, value);
    }
    onChangeFilterSchoolOrigin(value) {
        this.studentsTableListService.updateFilter(src_app_enum_keyFilterStudent_enum__WEBPACK_IMPORTED_MODULE_2__["default"].schoolOrigin, value);
    }
    onChangeFilterSchoolCorrecting(value) {
        this.studentsTableListService.updateFilter(src_app_enum_keyFilterStudent_enum__WEBPACK_IMPORTED_MODULE_2__["default"].schoolCorrecting, value);
    }
    onChangeFilterCrossCorrector(value) {
        this.studentsTableListService.updateFilter(src_app_enum_keyFilterStudent_enum__WEBPACK_IMPORTED_MODULE_2__["default"].crossCorrector, value);
    }
    onResetFilter() {
        this.studentsTableListService.resetFilter();
    }
    onChangeSchoolCorrecting(item, item2) {
        const school = this.schoolListService.getSchoolById(item.value);
        this.studentsTableListService.updateSchoolCorrecting(item2._id, school);
    }
    onChangeCrossCorrector(item, item2) {
        const cross = this.crossCorrectorsService.getCrossById(item.value);
        this.studentsTableListService.updateCrossCorrector(item2._id, cross);
    }
    getCrossOption(item, item2) {
        return this.crossCorrectorsService.getCrossOption(item);
    }
    getSchoolOption(item) {
        return this.schoolListService.getSchoolOptions(item);
    }
}
TableStudentComponent.ɵfac = function TableStudentComponent_Factory(t) { return new (t || TableStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_studentsTableList_service__WEBPACK_IMPORTED_MODULE_4__["StudentsTableListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_schoolList_service__WEBPACK_IMPORTED_MODULE_5__["SchoolListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_crossCorrectors_service__WEBPACK_IMPORTED_MODULE_6__["CrossCorrectorsService"])); };
TableStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TableStudentComponent, selectors: [["app-table-student-component"]], viewQuery: function TableStudentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 23, vars: 6, consts: [[1, "container"], [1, "actions"], [1, "reset-btn", 3, "click"], [1, "text"], ["mat-table", "", 1, "mat-elevation-z8", "mentor-table", 3, "dataSource"], ["matColumnDef", "fullname"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "schoolOrigin"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "schoolCorrecting"], ["matColumnDef", "crossCorrector"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], [3, "label", "value", "onChangeValue"], ["mat-cell", ""], [3, "label", "value", "type", "options", "onChangeValue"], ["mat-cell", "", 2, "text-align", "center"], [3, "value", "selectionChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TableStudentComponent_Template_button_click_2_listener() { return ctx.onResetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "redo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TableStudentComponent_th_9_Template, 2, 2, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, TableStudentComponent_td_10_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TableStudentComponent_th_12_Template, 2, 4, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TableStudentComponent_td_13_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TableStudentComponent_th_15_Template, 2, 4, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, TableStudentComponent_td_16_Template, 4, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, TableStudentComponent_th_18_Template, 2, 4, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, TableStudentComponent_td_19_Template, 4, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, TableStudentComponent_tr_20_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, TableStudentComponent_tr_21_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _components_header_filter_header_filter_component__WEBPACK_IMPORTED_MODULE_8__["HeaderFilterComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #383838;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  height: 28px;\n  margin-top: 13px;\n  background-color: rgba(44, 146, 177, 0.7);\n  color: white;\n  border: unset;\n  margin-left: 5px;\n  cursor: pointer;\n  margin-bottom: 10px;\n  display: flex;\n  margin-right: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 13px;\n  display: flex;\n  background-color: #e0e011;\n  height: 28px;\n  margin-right: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  border: unset;\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n  background-color: #1d1d1d;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle.active[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle.edit[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle.edit[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 2px;\n  margin-left: 2px;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   .text-icon[_ngcontent-%COMP%] {\n  font-weight: bold;\n  cursor: pointer;\n  margin-top: 2px;\n  margin-left: 6px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBRUo7O0FBREk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBS0Esa0JBQUE7QUFETjs7QUFITTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUtSOztBQUFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQU1BLGtCQUFBO0FBSE47O0FBRE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHUjs7QUFFRTtFQUNFLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFFSTtFQUNFLHVCQUFBO0FBQU47O0FBRUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFDTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBTiIsImZpbGUiOiJ0YWJsZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC5hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAucmVzZXQtYnRuIHtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQgMTQ2IDE3NyAvIDcwJSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiB1bnNldDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQtYnRuIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDE3KTtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBcclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaWNvbi1jaXJjbGUge1xyXG4gICAgYm9yZGVyOiB1bnNldDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcbiAgICAmLmVkaXQge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0LWljb24ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
        // animation triggers go here
        ] } });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\challenge3\src\main.ts */"zUnb");


/***/ }),

/***/ "3CNT":
/*!***********************************************!*\
  !*** ./src/app/enum/keyFilterStudent.enum.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const keyFilterStudent = Object.freeze({
    fullname: 'fullname',
    schoolOrigin: 'schoolOrigin',
    schoolCorrecting: 'schoolCorrecting',
    crossCorrector: 'crossCorrector',
});
/* harmony default export */ __webpack_exports__["default"] = (keyFilterStudent);


/***/ }),

/***/ "9fZq":
/*!*****************************************************!*\
  !*** ./src/app/services/crossCorrectors.service.ts ***!
  \*****************************************************/
/*! exports provided: CrossCorrectorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossCorrectorsService", function() { return CrossCorrectorsService; });
/* harmony import */ var _data_crossCorrector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/crossCorrector */ "vDeQ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CrossCorrectorsService {
    constructor() {
        this.crossCorrectors = [];
        this.crossCorrectorsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.crossCorrectors = _data_crossCorrector__WEBPACK_IMPORTED_MODULE_0__["CrossCorrectors"];
    }
    getCrossById(id) {
        return this.crossCorrectors.find((item) => (item === null || item === void 0 ? void 0 : item._id) === id);
    }
    getCrossOption(item) {
        return this.crossCorrectors.filter((itemCross) => { var _a; return ((_a = itemCross === null || itemCross === void 0 ? void 0 : itemCross.school_origin_id) === null || _a === void 0 ? void 0 : _a._id) === (item === null || item === void 0 ? void 0 : item._id); });
    }
    getCategory() {
        let category = [];
        this.crossCorrectors.forEach((item) => {
            category.push(item.student_id.first_name + ' ' + item.student_id.last_name);
        });
        return category;
    }
}
CrossCorrectorsService.ɵfac = function CrossCorrectorsService_Factory(t) { return new (t || CrossCorrectorsService)(); };
CrossCorrectorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CrossCorrectorsService, factory: CrossCorrectorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EuHl":
/*!***********************************************!*\
  !*** ./src/app/enum/headerFilterType.enum.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const headerFilterType = Object.freeze({
    AUTOCOMPLATE: 'autocomplate',
    EMPTY: 'empty',
    SELECT: 'select',
    STATUS: 'status',
    TEXT: 'text',
});
/* harmony default export */ __webpack_exports__["default"] = (headerFilterType);


/***/ }),

/***/ "Mxp8":
/*!*******************************************************!*\
  !*** ./src/app/services/studentsTableList.service.ts ***!
  \*******************************************************/
/*! exports provided: StudentsTableListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsTableListService", function() { return StudentsTableListService; });
/* harmony import */ var _data_studentsTableList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/studentsTableList */ "lIzI");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class StudentsTableListService {
    constructor() {
        this.studentsTableListOri = [];
        this.studentsTableList = [];
        this.filter = {};
        this.studentsTableListOriChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.studentsTableListChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.studentsTableListOri = _data_studentsTableList__WEBPACK_IMPORTED_MODULE_0__["StudentsTableList"];
        this.studentsTableList = _data_studentsTableList__WEBPACK_IMPORTED_MODULE_0__["StudentsTableList"];
    }
    proceedData() {
        console.log('this.studentsTableListOri', this.studentsTableListOri);
        console.log('this.filter', this.filter);
        const newData = this.studentsTableListOri.filter((item) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
            let valid = true;
            const fullname = (item === null || item === void 0 ? void 0 : item.student_id.first_name) + ' ' + item.student_id.last_name;
            if (fullname
                .toLocaleLowerCase()
                .indexOf((_c = (_b = (_a = this.filter) === null || _a === void 0 ? void 0 : _a.fullname) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase()) !== null && _c !== void 0 ? _c : '') === -1)
                return false;
            if (((_d = item === null || item === void 0 ? void 0 : item.school_origin_id) === null || _d === void 0 ? void 0 : _d.short_name.toLocaleLowerCase().indexOf((_g = (_f = (_e = this.filter) === null || _e === void 0 ? void 0 : _e.schoolOrigin) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase()) !== null && _g !== void 0 ? _g : '')) === -1)
                return false;
            const schoolCorrecting = (_j = (_h = item === null || item === void 0 ? void 0 : item.school_correcting_id) === null || _h === void 0 ? void 0 : _h.short_name) !== null && _j !== void 0 ? _j : '';
            if (schoolCorrecting
                .toLocaleLowerCase()
                .indexOf((_m = (_l = (_k = this.filter) === null || _k === void 0 ? void 0 : _k.schoolCorrecting) === null || _l === void 0 ? void 0 : _l.toLocaleLowerCase()) !== null && _m !== void 0 ? _m : '') === -1)
                return false;
            const crossCorrector1 = (_p = (_o = item === null || item === void 0 ? void 0 : item.school_correcting_corrector_id) === null || _o === void 0 ? void 0 : _o.first_name) !== null && _p !== void 0 ? _p : '';
            const crossCorrector2 = (_r = (_q = item === null || item === void 0 ? void 0 : item.school_correcting_corrector_id) === null || _q === void 0 ? void 0 : _q.last_name) !== null && _r !== void 0 ? _r : '';
            const crossCorrectorFull = crossCorrector1 + ' ' + crossCorrector2;
            console.log('crossCorrectorFull', crossCorrectorFull);
            if (crossCorrectorFull
                .toLocaleLowerCase()
                .indexOf((_u = (_t = (_s = this.filter) === null || _s === void 0 ? void 0 : _s.crossCorrector) === null || _t === void 0 ? void 0 : _t.toLocaleLowerCase()) !== null && _u !== void 0 ? _u : '') === -1)
                return false;
            return valid;
        });
        console.log('newData', newData);
        this.studentsTableList = newData;
        this.studentsTableListChange.next(newData);
    }
    updateSchoolCorrecting(id, item) {
        const newData = this.studentsTableListOri.map((itemStudent) => (Object.assign({}, itemStudent)));
        const idx = newData.findIndex((itemStudent) => itemStudent._id === id);
        if (idx === -1)
            return;
        newData[idx].school_correcting_id = Object.assign({}, item === null || item === void 0 ? void 0 : item.school);
        newData[idx].school_correcting_corrector_id = {
            _id: null,
            first_name: null,
            last_name: null
        };
        this.studentsTableListOri = newData;
        this.studentsTableList = newData;
        this.studentsTableListOriChange.next(newData);
        this.studentsTableListChange.next(newData);
    }
    updateCrossCorrector(id, item) {
        const newData = this.studentsTableListOri.map((itemStudent) => (Object.assign({}, itemStudent)));
        const idx = newData.findIndex((itemStudent) => itemStudent._id === id);
        if (idx === -1)
            return;
        newData[idx].school_correcting_corrector_id = Object.assign(Object.assign({}, item.student_id), { _id: item._id });
        this.studentsTableListOri = newData;
        this.studentsTableList = newData;
        this.studentsTableListOriChange.next(newData);
        this.studentsTableListChange.next(newData);
    }
    updateFilter(key, search) {
        this.filter[key] = search;
        this.filterChange.next(this.filter);
        this.proceedData();
    }
    resetFilter() {
        this.filter = {};
        this.filterChange.next(this.filter);
        console.log('this.filter', this.filter);
        this.proceedData();
    }
}
StudentsTableListService.ɵfac = function StudentsTableListService_Factory(t) { return new (t || StudentsTableListService)(); };
StudentsTableListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StudentsTableListService, factory: StudentsTableListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _content_table_student_table_student_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/table-student/table-student.component */ "+uYn");
/* harmony import */ var _content_table_school_table_school_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/table-school/table-school.component */ "qslC");



class AppComponent {
    ngOnInit() {
    }
    ngAfterViewInit() {
        // this.dataSource.sort = this.sort; // For sort
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-table-student-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-table-school-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_content_table_student_table_student_component__WEBPACK_IMPORTED_MODULE_1__["TableStudentComponent"], _content_table_school_table_school_component__WEBPACK_IMPORTED_MODULE_2__["TableSchoolComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #383838;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"], data: { animation: [
        // animation triggers go here
        ] } });


/***/ }),

/***/ "UA5H":
/*!************************************************!*\
  !*** ./src/app/services/schoolList.service.ts ***!
  \************************************************/
/*! exports provided: SchoolListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolListService", function() { return SchoolListService; });
/* harmony import */ var _data_schoolList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/schoolList */ "r8WU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SchoolListService {
    constructor() {
        this.schooList = [];
        this.schooList = _data_schoolList__WEBPACK_IMPORTED_MODULE_0__["SchoolList"];
    }
    getSchoolById(id) {
        return this.schooList.find((itemSchool) => { var _a; return ((_a = itemSchool === null || itemSchool === void 0 ? void 0 : itemSchool.school) === null || _a === void 0 ? void 0 : _a._id) === id; });
    }
    getSchoolOptions(item) {
        return this.schooList.filter((itemSchool) => { var _a; return ((_a = itemSchool === null || itemSchool === void 0 ? void 0 : itemSchool.school) === null || _a === void 0 ? void 0 : _a._id) !== item._id; });
    }
    getTableSchool(studentsTableList) {
        const newData = this.schooList.map((item) => (Object.assign({}, item)));
        for (let i = 0; i < newData.length; i++) {
            const item = newData[i];
            const studentList = studentsTableList.filter((itemStud) => itemStud.school_origin_id._id === item.school._id);
            const correctionList = studentsTableList.filter((itemStud) => itemStud.school_correcting_id._id === item.school._id);
            item.correctionCount = correctionList.length;
            item.studentCount = studentList.length;
            item.diff = item.correctionCount - item.studentCount;
        }
        return newData;
    }
    getCategory() {
        let category = [];
        this.schooList.forEach((itemSchool) => {
            category.push(itemSchool.school.short_name);
        });
        return category;
    }
}
SchoolListService.ɵfac = function SchoolListService_Factory(t) { return new (t || SchoolListService)(); };
SchoolListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SchoolListService, factory: SchoolListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VEa6":
/*!*********************************************************************!*\
  !*** ./src/app/components/header-filter/header-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFilterComponent", function() { return HeaderFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _enum_headerFilterType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enum/headerFilterType.enum */ "EuHl");
/* harmony import */ var _services_studentsTableList_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/studentsTableList.service */ "Mxp8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");













function HeaderFilterComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HeaderFilterComponent_mat_form_field_5_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.keyUpInput($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.value);
} }
function HeaderFilterComponent_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8, " ");
} }
function HeaderFilterComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function HeaderFilterComponent_mat_form_field_6_Template_mat_autocomplete_optionSelected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.keyUpInput($event.option.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderFilterComponent_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.myControl)("matAutocomplete", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r1.filteredOptions));
} }
function HeaderFilterComponent_mat_form_field_7_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r12, " ");
} }
function HeaderFilterComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function HeaderFilterComponent_mat_form_field_7_Template_mat_form_field_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.keyUpInput($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderFilterComponent_mat_form_field_7_mat_option_2_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.options);
} }
function HeaderFilterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
class HeaderFilterComponent {
    constructor(studentsTableListService) {
        this.studentsTableListService = studentsTableListService;
        this.type = _enum_headerFilterType_enum__WEBPACK_IMPORTED_MODULE_3__["default"].TEXT;
        this.options = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.onChangeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        // if (this.type === headerFilterType.AUTOCOMPLATE) {
        //   const result = this.studentsTableListService.getCategoryUserType();
        //   this.options = ['All', ...result]
        // } else if (this.type === headerFilterType.SELECT) {
        //   this.options = this.mentorService.getCategoryCompanyName();
        // } else if (this.type === headerFilterType.STATUS) {
        //   const result = this.mentorService.getCategoryStatus();
        //   this.options = ['All', ...result]
        // }
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this._filter(value)));
    }
    keyUpInput(value) {
        this.onChangeValue.emit(value);
    }
    displayFn(item) {
        return item ? item : '';
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        const result = this.options.filter(option => {
            const lowerText = option.toLowerCase();
            if (lowerText === 'all')
                return true;
            return lowerText.indexOf(filterValue) >= 0;
        });
        return result;
    }
}
HeaderFilterComponent.ɵfac = function HeaderFilterComponent_Factory(t) { return new (t || HeaderFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_studentsTableList_service__WEBPACK_IMPORTED_MODULE_4__["StudentsTableListService"])); };
HeaderFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderFilterComponent, selectors: [["app-header-filter"]], inputs: { label: "label", value: "value", type: "type", options: "options" }, outputs: { onChangeValue: "onChangeValue" }, decls: 9, vars: 5, consts: [[1, "container"], [1, "label"], [1, "separator"], ["auto", "", "class", "example-full-width", 4, "ngIf"], ["class", "example-full-width", 4, "ngIf"], [3, "selectionChange", 4, "ngIf"], ["class", "empty-search", 4, "ngIf"], ["auto", "", 1, "example-full-width"], ["name", "search", "matInput", "", "placeholder", "Search", 3, "value", "keyup"], [1, "example-full-width"], ["type", "text", "placeholder", "Search a", "aria-label", "Number", "matInput", "", 3, "value", "formControl", "matAutocomplete"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "selectionChange"], [1, "empty-search"]], template: function HeaderFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderFilterComponent_mat_form_field_5_Template, 2, 1, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderFilterComponent_mat_form_field_6_Template, 6, 6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderFilterComponent_mat_form_field_7_Template, 3, 1, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderFilterComponent_div_8_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "autocomplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "select" || ctx.type === "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "empty");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".separator[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-bottom: 1px solid grey;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n}\n\n.empty-search[_ngcontent-%COMP%] {\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXItZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6ImhlYWRlci1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VwYXJhdG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZW1wdHktc2VhcmNoIHtcclxuICAgIGhlaWdodDogNDhweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_header_filter_header_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header-filter/header-filter.component */ "VEa6");
/* harmony import */ var _content_table_student_table_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/table-student/table-student.component */ "+uYn");
/* harmony import */ var _content_table_school_table_school_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content/table-school/table-school.component */ "qslC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_header_filter_header_filter_component__WEBPACK_IMPORTED_MODULE_11__["HeaderFilterComponent"],
        _content_table_student_table_student_component__WEBPACK_IMPORTED_MODULE_12__["TableStudentComponent"],
        _content_table_school_table_school_component__WEBPACK_IMPORTED_MODULE_13__["TableSchoolComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "lIzI":
/*!*******************************************!*\
  !*** ./src/app/data/studentsTableList.ts ***!
  \*******************************************/
/*! exports provided: StudentsTableList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsTableList", function() { return StudentsTableList; });
const StudentsTableList = [
    {
        "_id": "608bdcc72d095244640aff32",
        "student_id": {
            "_id": "5da7ea5525a0ba09f97abe6d",
            "first_name": "Gabriel",
            "last_name": "Lamela"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff33",
        "student_id": {
            "_id": "5da7ec1925a0ba09f97abe80",
            "first_name": "Rissix",
            "last_name": "Studupe"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff34",
        "student_id": {
            "_id": "5da7f1c225a0ba09f97abfe5",
            "first_name": "Adam",
            "last_name": "Robertson"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff35",
        "student_id": {
            "_id": "5da7f1c225a0ba09f97abfea",
            "first_name": "Amy",
            "last_name": "Lee"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff36",
        "student_id": {
            "_id": "5da7f43525a0ba09f97ac0cb",
            "first_name": "Riseight",
            "last_name": "Studupe"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff37",
        "student_id": {
            "_id": "5db0fe704ecfb421990f3444",
            "first_name": "Raimon",
            "last_name": "Taro"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff38",
        "student_id": {
            "_id": "5db7e8a244aabf3e16d7acde",
            "first_name": "Satu",
            "last_name": "Siswa"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff39",
        "student_id": {
            "_id": "5db7e8a244aabf3e16d7ace3",
            "first_name": "Dua",
            "last_name": "Siswa"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3a",
        "student_id": {
            "_id": "5db7e8a244aabf3e16d7ace8",
            "first_name": "Tiga",
            "last_name": "Siswa"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3b",
        "student_id": {
            "_id": "5db7e8a244aabf3e16d7aced",
            "first_name": "Empat",
            "last_name": "Siswa"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3c",
        "student_id": {
            "_id": "5db7e9b344aabf3e16d7ad05",
            "first_name": "Siswa",
            "last_name": "Lima"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3d",
        "student_id": {
            "_id": "5db90f5491cfc5107eded106",
            "first_name": "Han",
            "last_name": "Daehan"
        },
        "school_origin_id": {
            "_id": "5cbe73bd5ae970104463526c",
            "short_name": "SFT 5 "
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3e",
        "student_id": {
            "_id": "5db90f9c91cfc5107eded10f",
            "first_name": "Marlyn",
            "last_name": "Reena"
        },
        "school_origin_id": {
            "_id": "5cbe73bd5ae970104463526c",
            "short_name": "SFT 5 "
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3f",
        "student_id": {
            "_id": "5eba76cd888363308f2e2a55",
            "first_name": "Student",
            "last_name": "Dominique"
        },
        "school_origin_id": {
            "_id": "5eba74c5888363308f2e2a36",
            "short_name": "ZettaSchool"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff40",
        "student_id": {
            "_id": "5eba79e7888363308f2e2b44",
            "first_name": "Jani",
            "last_name": "Student"
        },
        "school_origin_id": {
            "_id": "5eba74c5888363308f2e2a36",
            "short_name": "ZettaSchool"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff41",
        "student_id": {
            "_id": "5eba7a1b888363308f2e2b5e",
            "first_name": "Jono",
            "last_name": "Student"
        },
        "school_origin_id": {
            "_id": "5eba74c5888363308f2e2a36",
            "short_name": "ZettaSchool"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    }
];


/***/ }),

/***/ "qslC":
/*!****************************************************************!*\
  !*** ./src/app/content/table-school/table-school.component.ts ***!
  \****************************************************************/
/*! exports provided: TableSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSchoolComponent", function() { return TableSchoolComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_studentsTableList_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/studentsTableList.service */ "Mxp8");
/* harmony import */ var _services_schoolList_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/schoolList.service */ "UA5H");
/* harmony import */ var _services_crossCorrectors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/crossCorrectors.service */ "9fZq");







function TableSchoolComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Schools ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableSchoolComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r10 == null ? null : element_r10.school == null ? null : element_r10.school.short_name, " ");
} }
function TableSchoolComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Students ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableSchoolComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r11 == null ? null : element_r11.studentCount, " ");
} }
function TableSchoolComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Corrections ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableSchoolComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r12 == null ? null : element_r12.correctionCount, " ");
} }
function TableSchoolComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Diff ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableSchoolComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r13 == null ? null : element_r13.diff, " ");
} }
function TableSchoolComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 14);
} }
function TableSchoolComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 15);
} }
class TableSchoolComponent {
    constructor(studentsTableListService, schoolListService, crossCorrectorsService) {
        this.studentsTableListService = studentsTableListService;
        this.schoolListService = schoolListService;
        this.crossCorrectorsService = crossCorrectorsService;
        this.schoolList = [];
        // dataSource: any = {};
        this.filterColumn = {
            name: '',
            userType: '',
            entity: '',
            status: '',
        };
        this.displayedColumns = [
            'schools',
            'students',
            'corrections',
            'diff',
        ];
        this.schoolList = schoolListService.getTableSchool(this.studentsTableListService.studentsTableList);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.schoolList);
        studentsTableListService.studentsTableListOriChange.subscribe((value) => {
            this.schoolList = schoolListService.getTableSchool(value);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.schoolList);
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // this.dataSource.sort = this.sort; // For sort
    }
}
TableSchoolComponent.ɵfac = function TableSchoolComponent_Factory(t) { return new (t || TableSchoolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_studentsTableList_service__WEBPACK_IMPORTED_MODULE_3__["StudentsTableListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_schoolList_service__WEBPACK_IMPORTED_MODULE_4__["SchoolListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_crossCorrectors_service__WEBPACK_IMPORTED_MODULE_5__["CrossCorrectorsService"])); };
TableSchoolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableSchoolComponent, selectors: [["app-table-school-component"]], viewQuery: function TableSchoolComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 16, vars: 3, consts: [[1, "container"], ["mat-table", "", 1, "mat-elevation-z8", "mentor-table", 3, "dataSource"], ["matColumnDef", "schools"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: left;", 4, "matCellDef"], ["matColumnDef", "students"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "corrections"], ["matColumnDef", "diff"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "text-align", "left"], ["mat-cell", "", 2, "text-align", "center"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableSchoolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableSchoolComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TableSchoolComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TableSchoolComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TableSchoolComponent_td_7_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TableSchoolComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TableSchoolComponent_td_10_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TableSchoolComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TableSchoolComponent_td_13_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TableSchoolComponent_tr_14_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TableSchoolComponent_tr_15_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #383838;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  height: 28px;\n  margin-top: 13px;\n  background-color: rgba(44, 146, 177, 0.7);\n  color: white;\n  border: unset;\n  margin-left: 5px;\n  cursor: pointer;\n  margin-bottom: 10px;\n  display: flex;\n  margin-right: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 13px;\n  display: flex;\n  background-color: #e0e011;\n  height: 28px;\n  margin-right: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  border: unset;\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n  background-color: #1d1d1d;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle.active[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle.edit[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle.edit[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 2px;\n  margin-left: 2px;\n}\n\n.container[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   .text-icon[_ngcontent-%COMP%] {\n  font-weight: bold;\n  cursor: pointer;\n  margin-top: 2px;\n  margin-left: 6px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZS1zY2hvb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFESTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFLQSxrQkFBQTtBQUROOztBQUhNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBS1I7O0FBQUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBTUEsa0JBQUE7QUFITjs7QUFETTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUdSOztBQUVFO0VBQ0UsV0FBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQURKOztBQUVJO0VBQ0UsdUJBQUE7QUFBTjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUNNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUVJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFOIiwiZmlsZSI6InRhYmxlLXNjaG9vbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAuYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgLnJlc2V0LWJ0biB7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0IDE0NiAxNzcgLyA3MCUpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkLWJ0biB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAxNyk7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgXHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmljb24tY2lyY2xlIHtcclxuICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDI5LCAyOSk7XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG4gICAgJi5lZGl0IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dC1pY29uIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
        // animation triggers go here
        ] } });


/***/ }),

/***/ "r8WU":
/*!************************************!*\
  !*** ./src/app/data/schoolList.ts ***!
  \************************************/
/*! exports provided: SchoolList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolList", function() { return SchoolList; });
const SchoolList = [
    {
        "school": {
            "_id": "5cbe73bd5ae970104463526c",
            "short_name": "SFT 5 "
        }
    },
    {
        "school": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        }
    },
    {
        "school": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        }
    },
    {
        "school": {
            "_id": "5eba74c5888363308f2e2a36",
            "short_name": "ZettaSchool"
        }
    }
];


/***/ }),

/***/ "vDeQ":
/*!****************************************!*\
  !*** ./src/app/data/crossCorrector.ts ***!
  \****************************************/
/*! exports provided: CrossCorrectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossCorrectors", function() { return CrossCorrectors; });
const CrossCorrectors = [
    {
        "_id": "608bdcc72d095244640aff32",
        "student_id": {
            "_id": "5da7ea5525a0ba09f97abe6d",
            "first_name": "Gabriel",
            "last_name": "Lamela"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff33",
        "student_id": {
            "_id": "5da7ec1925a0ba09f97abe80",
            "first_name": "Rissix",
            "last_name": "Studupe"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff34",
        "student_id": {
            "_id": "5da7f1c225a0ba09f97abfe5",
            "first_name": "Adam",
            "last_name": "Robertson"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff35",
        "student_id": {
            "_id": "5da7f1c225a0ba09f97abfea",
            "first_name": "Amy",
            "last_name": "Lee"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff36",
        "student_id": {
            "_id": "5da7f43525a0ba09f97ac0cb",
            "first_name": "Riseight",
            "last_name": "Studupe"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff37",
        "student_id": {
            "_id": "5db0fe704ecfb421990f3444",
            "first_name": "Raimon",
            "last_name": "Taro"
        },
        "school_origin_id": {
            "_id": "5c359ae97481e90ab279b969",
            "short_name": "SFT 1 (School for test)"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff38",
        "student_id": {
            "_id": "5db7e8a244aabf3e16d7acde",
            "first_name": "Satu",
            "last_name": "Siswa"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff39",
        "student_id": {
            "_id": "5db7e8a244aabf3e16d7ace3",
            "first_name": "Dua",
            "last_name": "Siswa"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3a",
        "student_id": {
            "_id": "5db7e8a244aabf3e16d7ace8",
            "first_name": "Tiga",
            "last_name": "Siswa"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3b",
        "student_id": {
            "_id": "5db7e8a244aabf3e16d7aced",
            "first_name": "Empat",
            "last_name": "Siswa"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3c",
        "student_id": {
            "_id": "5db7e9b344aabf3e16d7ad05",
            "first_name": "Siswa",
            "last_name": "Lima"
        },
        "school_origin_id": {
            "_id": "5c359c407481e90ab279ba6b",
            "short_name": "SFT 3"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3d",
        "student_id": {
            "_id": "5db90f5491cfc5107eded106",
            "first_name": "Han",
            "last_name": "Daehan"
        },
        "school_origin_id": {
            "_id": "5cbe73bd5ae970104463526c",
            "short_name": "SFT 5 "
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3e",
        "student_id": {
            "_id": "5db90f9c91cfc5107eded10f",
            "first_name": "Marlyn",
            "last_name": "Reena"
        },
        "school_origin_id": {
            "_id": "5cbe73bd5ae970104463526c",
            "short_name": "SFT 5 "
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff3f",
        "student_id": {
            "_id": "5eba76cd888363308f2e2a55",
            "first_name": "Student",
            "last_name": "Dominique"
        },
        "school_origin_id": {
            "_id": "5eba74c5888363308f2e2a36",
            "short_name": "ZettaSchool"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff40",
        "student_id": {
            "_id": "5eba79e7888363308f2e2b44",
            "first_name": "Jani",
            "last_name": "Student"
        },
        "school_origin_id": {
            "_id": "5eba74c5888363308f2e2a36",
            "short_name": "ZettaSchool"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    },
    {
        "_id": "608bdcc72d095244640aff41",
        "student_id": {
            "_id": "5eba7a1b888363308f2e2b5e",
            "first_name": "Jono",
            "last_name": "Student"
        },
        "school_origin_id": {
            "_id": "5eba74c5888363308f2e2a36",
            "short_name": "ZettaSchool"
        },
        "school_correcting_id": {
            "_id": null,
            "short_name": null
        },
        "school_correcting_corrector_id": {
            "_id": null,
            "first_name": null,
            "last_name": null
        },
        "status": "active",
        "count_document": 16
    }
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map