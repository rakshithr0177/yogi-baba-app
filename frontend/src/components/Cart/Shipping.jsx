import { Country ,State}  from "country-state-city"

const Shipping = () => {
    return (
        <section className="shipping">
            <main>
                <h1>Shipping Details</h1>
                <form action="">
                    <div>
                        <label htmlFor="">H.No</label>
                        <input type="text"
                        placeholder="Enter House No."/>
                    </div>
                    <div>
                        <label htmlFor="">City</label>
                        <input type="text"
                            placeholder="Enter City" />
                    </div>
                    <div>
                        <label >Country</label>
                        <select>
                            <option value="">Country</option>
                            {
                                Country && Country.getAllCountries().map(i => (
                                    <option key={i.isoCode} value={i.isoCode}>{ i.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label >State</label>
                        <select>
                            <option value="">State</option>
                            {State && State.getStatesOfCountry("IN").map(i => (
                                <option key={i.isoCode} value={i.isoCode}>{i.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label >Pin Code</label>
                        <input type="number"
                            placeholder="Enter Pin Code" />
                    </div>
                    <div>
                        <label >Phone No.</label>
                        <input type="number"
                            placeholder="Enter Phone No." />
                    </div>
                    <button type="submit">Confirm Order</button>
                </form>
            </main>
        </section>
    )
}

export default Shipping