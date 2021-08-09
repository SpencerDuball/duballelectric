import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Envelopes, EnvelopesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Envelopes",
  component: Envelopes,
} as ComponentMeta<typeof Envelopes>;

const Template: ComponentStory<typeof Envelopes> = (args: EnvelopesPropsI) => (
  <x.div display="flex" gap="20px">
    <Envelopes {...args} />
    <Envelopes {...args} fill="red.500" />
    <Envelopes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
