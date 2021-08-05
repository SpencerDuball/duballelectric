import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GooglePlay, GooglePlayPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/GooglePlay",
  component: GooglePlay,
} as ComponentMeta<typeof GooglePlay>;

const Template: ComponentStory<typeof GooglePlay> = (
  args: GooglePlayPropsI
) => (
  <x.div display="flex" gap="20px">
    <GooglePlay {...args} />
    <GooglePlay {...args} fill="red.500" />
    <GooglePlay {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
