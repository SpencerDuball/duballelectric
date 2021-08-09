import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Unamused, UnamusedPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Unamused",
  component: Unamused,
} as ComponentMeta<typeof Unamused>;

const Template: ComponentStory<typeof Unamused> = (args: UnamusedPropsI) => (
  <x.div display="flex" gap="20px">
    <Unamused {...args} />
    <Unamused {...args} fill="red.500" />
    <Unamused {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
