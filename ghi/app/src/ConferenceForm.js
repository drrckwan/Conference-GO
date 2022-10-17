import React from 'react';

class ConferenceForm extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="offset-3 col-6">
                    <div class="shadow p-4 mt-4">
                        <h1>Create a new conference</h1>
                        <form id="create-conference-form">
                            <div class="form-floating mb-3">
                                <input placeholder="Name" required type="text" name="name" id="name"
                                    class="form-control" />
                                <label for="name">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input placeholder="mm/dd/yyyy" required type="date" name="starts" id="starts"
                                    class="form-control">
                                    <label for="starts">Starts</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input placeholder="mm/dd/yyyy" required type="date" name="ends" id="ends"
                                    class="form-control">
                                    <label for="ends">Ends</label>
                            </div>
                            <div class="mb-3">
                                <label for="description">Description</label>
                                <textarea required type="text" name="description" id="description" class="form-control"
                                    rows="3"></textarea>
                            </div>
                            <div class="form-floating mb-3">
                                <input placeholder="Maximum Presentations" required type="number"
                                    name="max_presentations" id="max_presentations" class="form-control">
                                    <label for="max_presentations">Maximum Presentations</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input placeholder="Maximum Attendees" required type="number" name="max_attendees"
                                    id="max_attendees" class="form-control">
                                    <label for="max_attendees">Maximum Attendees</label>
                            </div>
                            <div class="mb-3">
                                <select required name="location" id="location" class="form-select">
                                    <option selected value="">Choose a location</option>
                                </select>
                            </div>
                            <button class="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
