basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showString("BUS STATION")
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showString("Texto narrativo")
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showString("Establecer \"X\" en \"Y\"")
    } else if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        basic.showString("PROCARIOTAS")
    } else if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        basic.showString("Pines")
    } else if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        basic.showString("Expreciones Algebraicas")
    } else if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        basic.showString("INSERTAR TEXTO")
    } else if (pins.digitalReadPin(DigitalPin.P7) == 1) {
        basic.showString("INSERTAR TEXTO")
    } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        basic.showString("INSERTAR TEXTO")
    } else if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        basic.showString("INSERTAR TEXTO")
    }
})
