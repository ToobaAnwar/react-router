import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <>
      {/* suspense use to show fallback when await works */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        {/* this all will load by react router dom */}
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;

// executes in the brower not in the server

async function loadEvents() {
  // u can code any js code here
  // but can't use react hooks here
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json(
      {
        message: "Could not fetch events.",
      },
      {
        status: 500,
      }
    );
  } else {
    // Response is new Browser API and is not supported in all browsers
    // const res = new Response('any data', { status: 201});
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}

// Promise - valie that resolve in to another value
// defer use there where promise return
