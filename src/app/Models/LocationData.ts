
    export interface Statename {
    }

    export interface Osmtags {
        wikidata: string;
        boundary: string;
        name: string;
        type: string;
        name_te: string;
        admin_level: string;
    }

    export interface Postal {
    }

    export interface Class {
    }

    export interface Loc {
        staddress: string;
        stnumber: string;
        postal: Postal;
        latt: string;
        city: string;
        prov: string;
        longt: string;
        class: Class;
        dist: string;
    }

    export interface Alt {
        loc: Loc[];
    }

    export interface Postal2 {
    }

    export interface RemainingCredits {
    }

    export interface Class2 {
    }

    export interface Admin6 {
        wikidata: string;
        level: string;
        boundary: string;
        name: string;
        type: string;
        name_te: string;
        admin_level: string;
    }

    export interface Admin5 {
        wikipedia: string;
        wikidata: string;
        name_mr: string;
        fixme: string;
        name: string;
        note: string;
        name_te: string;
        admin_level: string;
        level: string;
        name_kn: string;
        boundary: string;
        name_pa: string;
        type: string;
        name_en: string;
        name_hi: string;
    }

    export interface Adminareas {
        admin6: Admin6;
        admin5: Admin5;
    }

    export interface RootObject {
        statename: Statename;
        distance: string;
        elevation: string;
        osmtags: Osmtags;
        state: string;
        latt: string;
        city: string;
        prov: string;
        geocode: string;
        geonumber: string;
        country: string;
        stnumber: string;
        staddress: string;
        inlatt: string;
        alt: Alt;
        timezone: string;
        region: string;
        postal: Postal2;
        longt: string;
        remaining_credits: RemainingCredits;
        confidence: string;
        inlongt: string;
        class: Class2;
        adminareas: Adminareas;
        altgeocode: string;
    }


