import React from 'react';

class ConferenceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            starts: '',
            ends: '',
            description: '',
            maxPresentations: '',
            maxAttendees: '',
            locations: [],
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleMaxPresentations = this.handleMaxPresentations.bind(this);
        this.handleMaxAttendees = this.handleMaxAttendees.bind(this);
        this.handleLocationSelection = this.handleLocationSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value })
    }

    handleStartDate(event) {
        const value = event.target.value;
        this.setState({ starts: value })
    }

    handleEndDate(event) {
        const value = event.target.value;
        this.setState({ ends: value })
    }

    handleDescription(event) {
        const value = event.target.value;
        this.setState({ description: value })
    }

    handleMaxPresentations(event) {
        const value = event.target.value;
        this.setState({ maxPresentations: value })
    }

    handleMaxAttendees(event) {
        const value = event.target.value;
        this.setState({ maxAttendees: value })
    }

    handleLocationSelection(event) {
        const value = event.target.value;
        this.setState({ location: value })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state }
        data.max_attendees = data.maxAttendees;
        data.max_presentations = data.maxPresentations;
        delete data.maxAttendees;
        delete data.maxPresentations;
        delete data.locations;
        console.log("::::data::::", data)

        const conferenceUrl = 'http://localhost:8000/api/conferences/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(conferenceUrl, fetchConfig);
        if (response.ok) {
            const newConference = await response.json();
            console.log("New Conference: ", newConference)

            const cleared = {
                name: '',
                starts: '',
                ends: '',
                description: '',
                maxPresentations: '',
                maxAttendees: '',
                location: '',
            };
            this.setState(cleared)
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8000/api/locations/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({ locations: data.locations })
        };
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new conference</h1>
                        <form onSubmit={this.handleSubmit} id="create-conference-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name"
                                    className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleStartDate} value={this.state.starts} placeholder="mm/dd/yyyy" required type="date" name="starts" id="starts"
                                    className="form-control" />
                                <label htmlFor="starts">Starts</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleEndDate} value={this.state.ends} placeholder="mm/dd/yyyy" required type="date" name="ends" id="ends"
                                    className="form-control" />
                                <label htmlFor="ends">Ends</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea onChange={this.handleDescription} value={this.state.description} required type="text" name="description" id="description" className="form-control"
                                    rows="3"></textarea>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleMaxPresentations} value={this.state.maxPresentations} placeholder="Maximum Presentations" required type="number"
                                    name="max_presentations" id="max_presentations" className="form-control" />
                                <label htmlFor="max_presentations">Maximum Presentations</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleMaxAttendees} value={this.state.maxAttendees} placeholder="Maximum Attendees" required type="number" name="max_attendees"
                                    id="max_attendees" className="form-control" />
                                <label htmlFor="max_attendees">Maximum Attendees</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleLocationSelection} value={this.state.location} required name="location" id="location" className="form-select">
                                    <option value="">Choose a location</option>
                                    {this.state.locations.map(location => {
                                        return (
                                            <option key={location.id} value={location.id}>{location.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConferenceForm
