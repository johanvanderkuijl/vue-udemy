<template>
  <v-dialog width="350px" persistent>
    <template v-slot:activator="{ on }">
      <v-btn fab accent v-on="on">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-card-title>Edit Meetup</v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-card-text>
              <v-text-field label="Title" id="title" required></v-text-field>
              <v-textarea
                label="Description"
                id="description"
                multi-line
                required
              ></v-textarea>
            </v-card-text>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-card-actions>
              <v-btn flat class="primary--text">Close</v-btn>
              <v-btn flat class="primary--text">Save</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
