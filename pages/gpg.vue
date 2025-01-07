<template>
    <div class="h-dvh flex flex-col py-8 text-center">

        <h1 class="text-6xl mb-4 text-primary-500">Did I send it?</h1>
        <p>
            I sign stuff with GPG keys! If it's signed by me, either it genuinely came from the real me, or I'm in deep
            trouble...
            <br> You can verify my signature by using one of my public keys which are listed below.
        </p>

        <br><br>

        <table class="mx-auto block w-full overflow-auto">
            <thead>
                <tr class="text-primary-500">
                    <th>Creation date</th>
                    <th>Valid until</th>
                    <th>Email</th>
                    <th>Public key file</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr class="[&>td]:p-4" v-for="key in sortByLatest(GPG_KEYS)" :key="key.url">
                    <td>{{ key.from }}</td>
                    <td>{{ key.to }}</td>
                    <td>{{ key.email }}</td>
                    <td>
                        <a class="underline text-secondary-600" :href="key.url" download>Download</a>
                    </td>
                    <td>
                        <span v-if="key.revoked" class="text-error-500 font-extrabold">Revoked</span>
                        <span v-else-if="new Date(key.to) < new Date()" class="text-error-500">Expired</span>
                        <span v-else class="text-success-500">Valid</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "reader",
})

type GPGKey = {
    from: string;
    to: string;
    url: string;
    email: string;
    revoked: boolean;
};

const GPG_KEYS = Object.freeze([
    Object.freeze({
        from: "5 Sep 2024 12:14:26 (UTC)",
        to: "3 Jan 2025 12:14:26 (UTC)",
        url: "/gpg-keys/eric-bieszczad-stie-2024-09-05.gpg",
        email: "35773677+BeatsuDev@users.noreply.github.com",
        revoked: false
    }),
    Object.freeze({
        from: "6 Jan 2025 18:53:24 (UTC)",
        to: "3 Apr 2025 23:10:59 (UTC)",
        url: "/gpg-keys/eric-bieszczad-stie-2025-01-06.gpg",
        email: "35773677+BeatsuDev@users.noreply.github.com",
        revoked: false
    }),
]) satisfies Readonly<Readonly<GPGKey>[]>;

function sortByLatest(keys: Readonly<GPGKey[]>): GPGKey[] {
    let copy = keys.slice();
    return copy.sort((a, b) => {
        const aDate = new Date(a.to);
        const bDate = new Date(b.to);
        return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
    });
}
</script>